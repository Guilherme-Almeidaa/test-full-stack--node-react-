import React,{useContext} from 'react';
import context from '../../provider/context';
import './style.css';
import {Form , Col ,Button } from 'react-bootstrap';


function Header () {
    const {filterEmployee, setFilterEmploye, configFilter} = useContext(context);

    const changeFilterEmploye = ({target}) => {
         setFilterEmploye({...filterEmployee , [target.name]:target.value})
    }

    const restartFilter = () => {
        setFilterEmploye(configFilter)
    }

    return (
<div className="cotainer-form-filter">
    <Form className="form-filter">
        <Form.Row>
          <Form.Group as={Col} md="10" controlId="validationCustom01">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              type="text"
              value={filterEmployee.nome}
              name="nome"
              onChange={changeFilterEmploye}
            />
            <Form.Control.Feedback>Ok</Form.Control.Feedback>
          </Form.Group>
          </Form.Row>
          
        <Form.Row className="conteine-select-form">
       <Form.Group className="select-form" >
       <Form.Label >Setor</Form.Label>
         <select
          name="setor"
          onChange={changeFilterEmploye}
          value={filterEmployee.setor}>
           <option value="">Setor</option>  
           <option value="Engenharia" >Engenharia</option>
           <option value="Compras" >Compras</option>
           <option value="Vendas" >Vendas</option>
           <option value="Financeiro" >Financeiro</option>
         </select>
         
       </Form.Group>
       <Form.Group className="select-form">
       <Form.Label  >Cargo</Form.Label>
         <select
          name="cargo"
           onChange={changeFilterEmploye}
          value={filterEmployee.cargo}>
           <option value="">Cargo</option>
           <option value="Auxiliar" >Auxiliar</option>
           <option value="Técnico" >Técnico</option>
           <option value="Engenheiro" >Engenheiro</option>
           <option value="Diretor" >Diretor</option>
         </select>
         
       </Form.Group>
       <Form.Group className="select-form">
       <Form.Label  >Nível</Form.Label>
         <select
          name="nivel"
         onChange={changeFilterEmploye}
          value={filterEmployee.nivel}>
           <option value="">Nível</option>
           <option value="Junior" >Junior</option>
           <option value="Pleno" >Pleno</option>
           <option value="Senior" >Senior</option>
           <option value="Estagiario" >Estagiario</option>
         </select>
         
       </Form.Group>
       </Form.Row>
       <Button className="button-restart"  onClick={restartFilter} variant="success">Reiniciar Filtro</Button>
    </Form>
</div>
    )
}

export default Header;