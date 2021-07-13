import React,{useState,useContext,useEffect} from 'react';
import context from '../../provider/context';
import Form from '../../components/Form';
import { findById, requestUpdateEmployee } from '../../utilities/apiEmployees';
import Loading from '../../components/Loading';

function PageUpdate({match}) {
    const id = match.params.id
    console.log(typeof id)
    const  { setEmployee, employee } = useContext(context);
       
       const [validated, setValidated] = useState(false);
       const [message, setMessage] = useState('');
       const [statusError,setStatusError] = useState(false);
       const [ isLoading , setIsLoading] = useState(true);

    useEffect(() => {
     findById(id).then((response) => {
        setEmployee(response);
        
    })
    .catch((error) => {
        setMessage(error.response.data.error.message)
    })
    setIsLoading(false);
    },[id,setEmployee])
     
       const handleSubmit = (event) => {
         event.preventDefault();
         const form = event.currentTarget;
         if (form.checkValidity() === false) {
           event.preventDefault();
           event.stopPropagation();
         }
         requestUpdateEmployee(employee,id).then((_response) => {
            setMessage('Funcionário Atualizado com sucesso');
            setStatusError(false)
          })
          .catch((error) => {
            setMessage(error.response.data.error.message)
            setStatusError(true);
          })
        setValidated(true);
        };
        
     
       return (
           <div className="conteiner-form">
           <h1 className="title">Editar informações do Funcionário</h1>
           <h3 className="message-return" style={{color: statusError ? 'red' :'green' } } >{message!== '' ? message : ''}</h3>
           {
               isLoading ? <Loading/> :
               <Form validated={validated} handleSubmit={handleSubmit}/>
           }
           </div>
       );
     }
   
export default PageUpdate;

