import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { actionTypes } from './Reducer'
import { useStateValue } from './StateProvider'
import GoogleIcon from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';


function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        // sign In
        auth.signInWithPopup(provider)
            .then(result => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                console.log(result.user);
            }).catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://i.ibb.co/5hW7F8m/icon.png" alt="logo" />
                <img src="https://i.ibb.co/gvNXKRG/twigram-text.png" alt="twigram-text" />

                <Button type="submit" startIcon={<GoogleIcon/>} onClick={signIn} >
                   Log In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
