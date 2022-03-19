import React,{useState} from "react";
import { Route, Link, useParams,useLocation,
    useNavigate} from "react-router-dom";
// import { withRouter} from "react-router";

const User = (props) => {
  const [user,setUser] = useState("user1");
    const param = useParams();
    const{id,name,username,email} = param
    // const navigate = useNavigate();
    // const location = useLocation();
    console.log("parms",param)
    // console.log("navihgat",navigate)
    // console.log("location",location)
      console.log("user props:",props.user(user))
    
  return (
    <div>
      <h2>Id:{id}</h2>
      <h2>Name:{name}</h2>
      <h2>Username: {username}</h2>
      <h2>Email:{email}</h2>
    </div>
  );
};

export default User;
