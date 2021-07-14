import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { requestDeleteEmployee } from '../../utilities/apiEmployees';


function Employee ({ employee , statutsRequest , setStatusRequest }) {
    const { 
      audit_data_update ,
      audit_data_insert,
      nome,email,
      data_nascimento,
      data_admissao,
      setor,
      cargo,
      nivel,
      id, } = employee;
    const formatDate = (date) => {
      if(!date) return '';
      const dateFormated = new Date(date);
      const day = dateFormated.getDay();
      const dayFormated = day < 10 ? `0${day}`  : day
      const month = dateFormated.getMonth();
      const monthFormated = month < 10 ? `0${month}`  : month
      return `${dayFormated}/${monthFormated}/${dateFormated.getFullYear()}`
    }

    const deleteEmploye = () => {
     const responseUser =window.confirm('Tem certeza que deseja exluir o funcionário?');
     if(responseUser) {
       requestDeleteEmployee(id).then((_response) => {
        alert('Funcionario excluído')
       })
       setStatusRequest(!statutsRequest);
     }
    }
    return (
     <tr>
         <td>{nome}</td>
         <td>{email}</td>
         <td>{formatDate(data_nascimento)}</td>
         <td>{formatDate(data_admissao)}</td>
         <td>{setor}</td>
         <td>{cargo}</td>
         <td>{nivel}</td>
         <td>{formatDate(audit_data_update)}</td>
         <th>{formatDate(audit_data_insert)}</th>
         <td><Link to={`/employee/${employee.id}`} ><Button variant="warning" >Editar</Button></Link></td>
         <td><Button  onClick={deleteEmploye} variant="danger" >Exluir</Button></td>
     </tr>
    )
}

export default Employee;