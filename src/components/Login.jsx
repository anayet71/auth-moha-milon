import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    const navigate = useNavigate()
    const {signInUser, signInWithGoogle} = useContext(AuthContext)


    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        signInUser(email, password)
        .then(result=> {
            console.log(result.user)
            e.target.reset()
            navigate('/')
        })
        .catch(error =>{
            console.log('ERROR', error)
        })

    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            navigate('/')
        })
        .catch(error => console.log(error.message, 'Error') )

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Login now!</h1>
                  
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className='mx-4 mb-4 text-xs'>
                        New to this website? Please <Link className='hover:link' to={'/register'}>Register.</Link>
                    </p>
                    <p><button onClick={handleGoogleSignIn} className='btn btn-ghost'> Google</button></p>
                </div>
            </div>
        </div>
    );
};

export default Login;