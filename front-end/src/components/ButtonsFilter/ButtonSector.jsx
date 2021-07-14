import React, { useContext } from 'react';
import context from '../../provider/context';
import { Form } from 'react-bootstrap';
import './style.css';

function ButtonSector() {
  const { filterEmployee, setFilterEmploye } = useContext(context);

  const changeFilterEmploye = filter => {
    if (filter === filterEmployee.setor) {
      setFilterEmploye({ ...filterEmployee, setor: '' });
    } else {
      setFilterEmploye({ ...filterEmployee, setor: filter });
    }
  };

  const radios = [
    { name: 'Engenharia' },
    { name: 'Vendas' },
    { name: 'Financeiro' },
    { name: 'Compras' },
  ];

  return (
    <div className="container-filter">
      {radios.map((radio, index) => {
        return (
          <Form.Check
            className="filter"
            key={index}
            name="setor"
            type="switch"
            id={`custom-switch-sector-${index}`}
            value={filterEmployee.setor}
            label={radio.name}
            checked={filterEmployee.setor === radio.name}
            onChange={() => changeFilterEmploye(radio.name)}
          />
        );
      })}
    </div>
  );
}

export default ButtonSector;
