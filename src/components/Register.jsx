import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {

    const navigate  =  useNavigate()
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        console.log(email, password, name);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.log('Error', error.message)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Register!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="name" name='name' className="input" placeholder="Name" />
                            <label className="fieldset-label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" required name='password' className="input" placeholder="Password" />

                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className='mx-4 mb-4 text-xs'>
                        Already registered? Please <Link className='hover:link' to={'/login'}>Login.</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;