import React from 'react'
import { connect, useDispatch } from 'react-redux';
import * as firebase from "firebase";
import { Button,Form } from 'react-bootstrap';
import { doLogin, setEmailToStore, setPasswordToStore,loginSuccess, loginFailed } from '../../redux/Login/loginActions';
import './index.css';


class LoginComponent extends React.Component {
   
    constructor(props) {
        super(props);
        console.log('Props: ',props);
        
    }
    // componentDidMount () {
    //     // console.log('Compoent mounted');
    //     const database = firebase.database();
    //     // const rootRef = database.ref('Users');
    //     // rootRef.child('1').set({
    //     //     username : 'vivek@123',
    //     //     password: '12345',
    //     //     role: 'student'
    //     // })
    //     database.ref().child('Users').on('value', snapshot => {
    //         if(snapshot.val() !== null ) {
    //             console.log('users Data : ', snapshot.val());
                
                
    //         }
    //     })


        
    // }
    updateEmail (event) {
        console.log('Email is: ', event.target.value);
        console.log('Props: ', this.props);
        console.log('State: ', this.state);
        this.props.setEmail(event.target.value)
        
    }
    updatePassword (event) {
        console.log('password is: ', event.target.value);
        console.log('Props: ', this.props);
        this.props.setPassword(event.target.value)
    }
    validateUser(users) {
        const index = users.findIndex((element) => element.username === this.props.email && element.password === this.props.password);
        console.log('Index: ', index);
        if(index > -1) {
            console.log('User logged in success ', users[index]); 
            this.props.loginSuccess(users[index]);
        }else {
            console.log('Login failed');
            this.props.loginFailed();
        }
    }
    submitForm () {
        this.props.login();
        const database = firebase.database();
        console.log("Ready to submit form");
        database.ref().child('Users').on('value', snapshot => {
            if(snapshot.val() !== null ) {
                console.log('users Data : ', snapshot.val());
                let users = snapshot.val();
                this.validateUser(users);
            }
        })
       
    }
    render(props) {
        return (
            <div className ="login-form">
               
                {
                    this.props.isLoading === true && 
                    <div className="spinner-border" role="status" style={loaderStyle}>
                        <span className="sr-only">Loading...</span>
                    </div>
                }
                {
                    this.props.loginError !== '' &&
                    <h4 style={errorMessage}>{this.props.loginError}</h4>
                }
                
                <Form className="form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange = {this.updateEmail.bind(this)} type="email" placeholder="Enter email" />
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange= { this.updatePassword.bind(this)}type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={ this.submitForm.bind(this) }variant="primary" type="button" className="login-btn">
                        Submit
      </Button>
                </Form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        isLoading: state.login.isLoading,
        email : state.login.email,
        password : state.login.password,
        loginError: state.login.loginError

    }

}
const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(doLogin()),
        loginSuccess: (response) => dispatch(loginSuccess(response)),
        loginFailed : () => dispatch(loginFailed()),
        setEmail: (email) => dispatch(setEmailToStore(email)),
        setPassword: (password) => dispatch(setPasswordToStore(password))
    }
}

const loaderStyle =  {
    position: 'absolute'
}
const errorMessage = {
    color: 'red',
    position: 'absolute'

}
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
