import Navbar from "./components/Nav";
import {useEffect,useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import User from './components/User';
import './app.css'
const App = () => {
    const [users, setusers] = useState();
    const [ spinner, setSpinner ] = useState(true);
    // const [newData, setNewData] = useState();
    useEffect(() => {
        let fetchh = fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{

            return response.json()
        }).then((data)=>{
            console.log({data});
            
            return setusers(data)
        })
        // return  spinner ? console.log('loading'):console.log("not")

},[])
   


    
    console.log("users",users)

    const formData = (value) =>{
        value.id=users.length+1
        const newData = [...users,value]
        // console.log("users",users)
        setusers(newData)
        // console.log("val",value)
        // console.log("new",newData)
        
    }
    const singleUser = (user) =>{
        console.log("App User",user)
    }
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/home" exact element={<Home users={users} user={singleUser}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact data={formData}/>}/>                
                <Route path={`/user/:id/:name/:username/:email`} element={<User/>}/>                
                <Route path={`/user`} element={<User user={singleUser}/>}/>                
            </Routes>
        </Router>
    )
}

export default App