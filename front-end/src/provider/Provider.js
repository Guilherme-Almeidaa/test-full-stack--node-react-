
import React, { useState } from 'react';
import Context from './context';

function Provider({ children }) {
    const [employees, setEmployees] = useState([]);
    const [statutsRequest, setStatusRequest] = useState(false);
    const [employee, setEmployee] = useState({
        nome: '',
        email: '',
        setor: '',
        cargo: '',
        nivel: '',
        data_nascimento: '',
        data_admissao: '',
    });

    const configFilter = {
        nome: '',
        setor: '',
        cargo: '',
        nivel: '',
    }

    const [filterEmployee, setFilterEmploye] = useState(configFilter)


    const context = {
        statutsRequest,
        setStatusRequest,
        configFilter,
        employees,
        setEmployees,
        filterEmployee,
        setFilterEmploye,
        employee,
        setEmployee,
    }
    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>

    )
}

export default Provider;