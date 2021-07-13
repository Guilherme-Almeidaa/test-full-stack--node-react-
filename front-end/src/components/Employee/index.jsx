import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { requestDeleteEmployee } from '../../utilities/apiEmployees';


function Employee ({ employee , statutsRequest , setStatusRequest }) {
    const { nome,email,data_nascimento,data_admissao,setor,cargo,nivel,id } = employee;
    const formatDate = (date) => {
      const splitD = date.split('-');
      return `${splitD[2]}-${splitD[1]}-${splitD[0]}`
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
         <td><Link to={`/employee/${employee.id}`} ><Button variant="primary" >Editar</Button></Link></td>
         <td><Button onClick={deleteEmploye} variant="danger" >Exluir</Button></td>
     </tr>
    )
}

export default Employee;