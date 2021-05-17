import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <form>
             <div class="container">
            <h1>Login</h1>


            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
            <hr></hr>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
            <hr></hr>


            <Link to='/'><button type="submit" class="registerbtn" >Login</button></Link>
            </div>

            
        </form>
     );
    }
}