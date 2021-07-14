import React, { useState, useContext } from 'react';
import './style.css';
import context from '../../provider/context';
import Form from '../../components/Form';
import { requestRegisterEmployee } from '../../utilities/apiEmployees';

function PageRegister() {
  const { employee } = useContext(context);

  const [validated, setValidated] = useState(false);
  const [message, setMessage] = useState('');
  const [statusError, setStatusError] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    requestRegisterEmployee(employee)
      .then(_response => {
        setMessage('Funcionário Cadastrado com sucesso');
        setStatusError(false);
      })
      .catch(error => {
        setMessage(error.response.data.error.message);
        setStatusError(true);
      });
    setValidated(true);
  };
  console.log(message);

  return (
    <div className="container-form-page">
      <div className="container-form">
        <h1 className="title">Cadastrar Funcionário</h1>
        <p
          className="message-return"
          style={{ color: statusError ? 'red' : 'green' }}
        >
          {message !== '' ? message : ''}
        </p>
        <div className="form">
          <Form validated={validated} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
export default PageRegister;
