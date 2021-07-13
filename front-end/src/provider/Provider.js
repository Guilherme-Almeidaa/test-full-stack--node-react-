
import React,{useState} from 'react';
import Context from './context';

function Provider ({children}) {
    const [employees , setEmployees ] = useState([]);
    const [employee , setEmployee] = useState({
    nome: '' ,
    email: '',
    setor: 'Engenharia',
    cargo: 'Auxiliar',
    nivel: 'Junior',
    data_nascimento: '',
    data_admissao: '',
   });

   const [filterEmployee, setFilterEmploye] = useState({
    nome: '' ,
    setor: '',
    cargo: '',
    nivel: '',
   })
   
    
const context = {
  employees ,
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