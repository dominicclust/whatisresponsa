import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session';
import styles from './SignupForm.module.css'

const SignupForm = () => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [valErrors, setValErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setValErrors([]);

        const user = {
            username,
            email,
            password
        }
        if (password === confirmPassword) {
            return dispatch(sessionActions.signup(user))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setValErrors([...data.errors])
                })
        }
        return setValErrors(['Please put the same values for Password and Confirm Password.'])
    }
    const toLogin = () => {
        return (<Redirect to='/login'/>)
    }
    return (
        <div>
            {{valErrors}
                ? (
                    <ul>
                        {valErrors.map((error, i) => (<li key={i}>{error}</li>))}
                    </ul>
                )
                : {}
            }

            <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                    <label className={styles.label}>
                        Username:
                        <input className={styles.input}
                            type='text'
                            name='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className={styles.label}>
                        Email Address:
                        <input className={styles.input}
                            type='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className={styles.label}>
                        Password:
                        <input className={styles.input}
                            type='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className={styles.label}>
                        Confirm Password:
                    </label>
                    <input className={styles.input}
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button className={styles.button} type='submit'>Sign Up</button>
                </div>
                <div>
                    <p>Already a member?</p>
                    <Link to='/login' onClick={toLogin} className={styles.link}>Log in!</Link>
                </div>
            </form>
        </div>

    )
}
export default SignupForm
