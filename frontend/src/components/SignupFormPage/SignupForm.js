import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session';
import styles from './SignupForm.module.css'

export const SignupForm = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [valErrors, setValErrors] = useState([])

    if (sessionUser) return (<Redirect to='/'/>)
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
                    if (data && data.errors) setValErrors(...valErrors, data.errors)
                })
        }
        return setValErrors(['Please put the same values for Password and Confirm Password.'])
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <ul>
                {valErrors.map((error, i) => <li key={i}>{error}</li>)}
            </ul>
            <div>
                <label className={styles.label}>
                    Username
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
                    Email Address
                    <input className={styles.input}
                        type='text'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label className={styles.label}>
                    Password
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
                    Confirm Password
                    <input className={styles.input}
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <button className={styles.button} type='submit'>Sign Up</button>
            </div>
        </form>

    )
}
