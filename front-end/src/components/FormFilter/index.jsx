import React, { useContext } from 'react';
import context from '../../provider/context';
import { Form, Col, Button } from 'react-bootstrap';
import './style.css';
import ButtonSector from '../ButtonsFilter/ButtonSector';
import ButtonOffice from '../ButtonsFilter/ButtonOffice';
import ButtonLevel from '../ButtonsFilter/ButtonLevel';

function Header() {
  const { filterEmployee, setFilterEmploye, configFilter } = useContext(
    context
  );

  const changeFilterEmploye = ({ target }) => {
    setFilterEmploye({ ...filterEmployee, [target.name]: target.value });
  };

  const restartFilter = () => {
    setFilterEmploye(configFilter);
  };

  return (
    <div className="cotainer-form-filter">
      <Form className="form-filter">
        <Form.Row className="conteine-select-form">
          <Button
            className="button-restart"
            onClick={restartFilter}
            variant="success"
          >
            Reiniciar Filtro
          </Button>
          <Form.Group className="select-form">
            <Form.Label className="label">Setor</Form.Label>
            <ButtonSector />
          </Form.Group>
          <Form.Group className="select-form">
            <Form.Label className="label">Cargo</Form.Label>
            <ButtonOffice />
          </Form.Group>
          <Form.Group className="select-form">
            <Form.Label className="label">Nível</Form.Label>
            <ButtonLevel />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group
            className="select-form"
            as={Col}
            md="12"
            controlId="validationCustom01"
          >
            <Form.Label className="label">Nome</Form.Label>
            <Form.Control
              type="text"
              value={filterEmployee.nome}
              name="nome"
              onChange={changeFilterEmploye}
            />
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}

export default Header;
