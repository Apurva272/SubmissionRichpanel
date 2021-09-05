import React from 'react';
import firebase from "firebase";
import{ GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import  "firebase/app";
import {auth} from './firebases'
const Login=()=> {
    return(
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Company</h2>
                <div className="login-button-google"
                     onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                
                >
                    <GoogleOutlined />Sign in with Google
                </div>
                <br></br>
                <div className="login-button facebook"
                    onClick={()=>auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                    <FacebookOutlined />Sign in with Facebook
                </div>
            </div>
        </div>
    );
}
export default Login;
/*Author: Apurva*/