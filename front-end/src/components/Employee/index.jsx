import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './style.css';
import { requestDeleteEmployee } from '../../api/apiEmployees';

function Employee({ employee, statutsRequest, setStatusRequest }) {
  const {
    audit_data_update,
    audit_data_insert,
    nome,
    email,
    data_nascimento,
    data_admissao,
    setor,
    cargo,
    nivel,
    id,
  } = employee;

  const formatDate = (date, increment) => {
    if (!date) return '';
    const dateFormated = new Date(date);
    /* 
    O dia que retorna do formulaŕio dos campos de preenchimento de data retorna
    com uma diferença de 1 a menos por isso uso o paramentro increment para
    verificar na chamada da função se vem do banco de dados ou do formulaŕio,
    caso venha do formulaŕio acrescenta + 1. 
    */
    const day = increment ? dateFormated.getDate() + 1 : dateFormated.getDate();
    const dayFormated = day < 10 ? `0${day}` : day;
    const month = dateFormated.getMonth() + 1;
    const monthFormated = month < 10 ? `0${month}` : month;
    return `${dayFormated}/${monthFormated}/${dateFormated.getFullYear()}`;
  };

  const deleteEmploye = () => {
    const responseUser = window.confirm(
      'Tem certeza que deseja exluir o funcionário?'
    );
    if (responseUser) {
      requestDeleteEmployee(id).then(_response => {
        alert('Funcionário excluído');
      });
      setStatusRequest(!statutsRequest);
    }
  };
  return (
    <tr>
      <td>{nome}</td>
      <td>{email}</td>
      <td>{formatDate(data_nascimento, true)}</td>
      <td>{formatDate(data_admissao, true)}</td>
      <td>{setor}</td>
      <td>{cargo}</td>
      <td>{nivel}</td>
      <td>{formatDate(audit_data_update)}</td>
      <th>{formatDate(audit_data_insert)}</th>
      <td>
        <Link to={`/employee/${id}`}>
          <Button className="button-edit" variant="outline-warning">
            Editar
          </Button>
        </Link>
      </td>
      <td>
        <Button
          className="button-delete"
          onClick={deleteEmploye}
          variant="outline-danger"
        >
          Exluir
        </Button>
      </td>
    </tr>
  );
}

export default Employee;
