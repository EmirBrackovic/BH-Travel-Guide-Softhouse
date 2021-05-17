import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Register.css';


export default class Register extends Component {
    render() {
        return (
            <form>
                <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
    <hr></hr>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
    <hr></hr>


    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
    <hr></hr>

    <button type="submit" class="registerbtn" >Register</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <Link to='/login'>Sign in</Link>.</p>
  </div>
            </form>
        );
    }
}