import React,{useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Home from './Home'
import { useNavigate } from 'react-router-dom';


const Contact = (props) => {
    const [name,setName] = useState('');
    const [username,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [city,setAddress] = useState('');
    const navigate = useNavigate();

console.log({navigate});

    const onChangeName=(e)=>{
        setName(e.target.value)
    }
    const onChangeUserName=(e)=>{
        setUserName(e.target.value)
    }
    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const onChangeAddress=(e)=>{
        setAddress(e.target.value)
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault()
       
        const data = {
            name:name,
            username:username,
            email:email,
            address:{
                city:city
            }
        } 
        props.data(data)
        setName('')
        setUserName('')
        setEmail('')
        setAddress('')
        navigate("/home")
    }
    
    return (
        <div className="form">
        <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name: </Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" onChange= {onChangeName} value={name}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Usename:</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Username" onChange={onChangeUserName} value={username}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" onChange={onChangeEmail} value={email}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address:</Form.Label>
                <Form.Control type="text" placeholder="Enter Your address" onChange={onChangeAddress} value={city}/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Add User
            </Button>
            </Form>
        </div>
        
    );
}

export default Contact;
