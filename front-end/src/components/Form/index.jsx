import React, { useContext } from 'react';
import './style.css';
import context from '../../provider/context';
import { Form, Col, Button } from 'react-bootstrap';

function FormEmployee({ validated, handleSubmit }) {
  const { employee, setEmployee } = useContext(context);

  return (
    <div className="container-form">
      <Form
        className="form-register"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="nome"
              value={employee.nome}
              onChange={({ target }) =>
                setEmployee({ ...employee, nome: target.value })
              }
            />
            <Form.Control.Feedback>Ok</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="email"
              value={employee.email}
              onChange={({ target }) =>
                setEmployee({ ...employee, email: target.value })
              }
            />
            <Form.Control.Feedback>Ok</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row className="conteine-select-form">
          <Form.Group className="select-form">
            <Form.Label>Setor</Form.Label>
            <select
              onChange={({ target }) =>
                setEmployee({ ...employee, setor: target.value })
              }
              value={employee.setor}
            >
              <option value="">Setor</option>
              <option value="Engenharia">Engenharia</option>
              <option value="Compras">Compras</option>
              <option value="Vendas">Vendas</option>
              <option value="Financeiro">Financeiro</option>
            </select>
          </Form.Group>
          <Form.Group className="select-form">
            <Form.Label>Cargo</Form.Label>
            <select
              onChange={({ target }) =>
                setEmployee({ ...employee, cargo: target.value })
              }
              value={employee.cargo}
            >
              <option value="">Cargo</option>
              <option value="Auxiliar">Auxiliar</option>
              <option value="Técnico">Técnico</option>
              <option value="Engenheiro">Engenheiro</option>
              <option value="Diretor">Diretor</option>
            </select>
          </Form.Group>
          <Form.Group className="select-form">
            <Form.Label>Nível</Form.Label>
            <select
              onChange={({ target }) =>
                setEmployee({ ...employee, nivel: target.value })
              }
              value={employee.nivel}
            >
              <option value="">Nível</option>
              <option value="Junior">Junior</option>
              <option value="Pleno">Pleno</option>
              <option value="Senior">Senior</option>
              <option value="Estagiario">Estagiario</option>
            </select>
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="duedate">
          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control
            type="date"
            name="duedate"
            placeholder="Data de nascimento"
            value={employee.data_nascimento}
            onChange={({ target }) =>
              setEmployee({ ...employee, data_nascimento: target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="duedate">
          <Form.Label>Data de admissão</Form.Label>
          <Form.Control
            type="date"
            name="duedate"
            placeholder="Data de admissão"
            value={employee.data_admissao}
            onChange={({ target }) =>
              setEmployee({ ...employee, data_admissao: target.value })
            }
          />
        </Form.Group>
        <Button className="button" type="submit">
          Confirmar
        </Button>
      </Form>
    </div>
  );
}

export default FormEmployee;
