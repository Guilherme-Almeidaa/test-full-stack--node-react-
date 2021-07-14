import React, { useContext } from 'react';
import context from '../../provider/context';
import { Form } from 'react-bootstrap';
import './style.css';

function ButtonOffice() {
  const { filterEmployee, setFilterEmploye } = useContext(context);

  const changeFilterEmploye = filter => {
    if (filter === filterEmployee.cargo) {
      setFilterEmploye({ ...filterEmployee, cargo: '' });
    } else {
      setFilterEmploye({ ...filterEmployee, cargo: filter });
    }
  };
  const radios = [
    { name: 'Auxiliar' },
    { name: 'Técnico' },
    { name: 'Engenheiro' },
    { name: 'Diretor' },
  ];

  return (
    <div className="container-filter">
      {radios.map((radio, index) => {
        return (
          <Form.Check
            className="filter"
            key={index}
            name="cargo"
            type="switch"
            id={`custom-switch-office-${index}`}
            value={filterEmployee.cargo}
            label={radio.name}
            checked={filterEmployee.cargo === radio.name}
            onChange={() => changeFilterEmploye(radio.name)}
          />
        );
      })}
    </div>
  );
}

export default ButtonOffice;
