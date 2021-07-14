import React, { useState, useContext, useEffect } from 'react';
import Employee from '../../components/Employee';
import context from '../../provider/context';
import { requestFilterEmployees } from '../../api/apiEmployees';
import { Table } from 'react-bootstrap';
import './style.css';
import Loading from '../../components/Loading';
import FormFilter from '../../components/FormFilter';

function PageBegin() {
  const { filterEmployee, setEmployee, employees, setEmployees } = useContext(
    context
  );
  const { nome, setor, cargo, nivel } = filterEmployee;
  const [isLoading, setIsLoading] = useState(true);
  const [statutsRequest, setStatusRequest] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      requestFilterEmployees(nome, setor, cargo, nivel).then(response => {
        setEmployees(response);
      });
      setIsLoading(false);
    }, 500);
  }, [statutsRequest, setEmployees, cargo, nivel, setor, nome, setEmployee]);

  return (
    <div className="container-table">
      <h1 className="title">Funcionários</h1>
      <FormFilter setIsLoading={setIsLoading} />
      {isLoading ? (
        <Loading />
      ) : (
        <Table
          className="table-employees"
          striped
          bordered
          hover
          variant="dark"
        >
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Data de Nascimento</th>
              <th>Data de admissão</th>
              <th>Setor</th>
              <th>Cargo</th>
              <th>Nível</th>
              <th>Ultima edição</th>
              <th>Data Cadastro</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <Employee
                statutsRequest={statutsRequest}
                setStatusRequest={setStatusRequest}
                key={index}
                employee={employee}
                index={index}
              />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default PageBegin;
