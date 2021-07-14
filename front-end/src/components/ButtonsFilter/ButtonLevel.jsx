import React, { useContext } from 'react';
import context from '../../provider/context';
import { Form } from 'react-bootstrap';
import './style.css';

function ButtonLevel() {
  const { filterEmployee, setFilterEmploye } = useContext(context);

  const changeFilterEmploye = filter => {
    if (filter === filterEmployee.nivel) {
      setFilterEmploye({ ...filterEmployee, nivel: '' });
    } else {
      setFilterEmploye({ ...filterEmployee, nivel: filter });
    }
  };

  const radios = [
    { name: 'Júnior' },
    { name: 'Pleno' },
    { name: 'Sênior' },
    { name: 'Estagiário' },
  ];

  return (
    <div className="container-filter">
      {radios.map((radio, index) => {
        return (
          <Form.Check
            className="filter"
            key={index}
            name="nivel"
            type="switch"
            id={`custom-switch-level-${index}`}
            value={filterEmployee.nivel}
            label={radio.name}
            checked={filterEmployee.nivel === radio.name}
            onChange={() => changeFilterEmploye(radio.name)}
          />
        );
      })}
    </div>
  );
}

export default ButtonLevel;
