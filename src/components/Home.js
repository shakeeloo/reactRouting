import "./Home.css";
import { Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Home = (props) => {
  const [data, setData] = useState(false);
  // setData(props.user(data))
  props.user()
  console.log("home data",data)
  return (
    <div>
      <h2 className="title">Users</h2>
      {
        <table border="1px" cellSpacing="0">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>address city</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {props.users === undefined ? (
              <tr>
                <td>LOADING</td>
              </tr>
            ) : (
              props.users.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.address.city}</td>
                    <td
                      onClick={(e) => {
                        fetch(
                          "https://jsonplaceholder.typicode.com/users/" +
                            item.id
                        )
                          .then((response) => {
                            return response.json();
                          })
                          .then((data) => {
                            console.log("dataaa",data)
                            return setData(data);
                          })
                      }}
                    >
                      <Link to="/user">Show User</Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      }
    </div>
  );
};
export default Home;
