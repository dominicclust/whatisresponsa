import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
import styles from './LoginForm.module.css'
import {Link, Redirect} from 'react-router-dom'

const LoginForm = () => {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [valErrors, setValErrors] = useState([])

    const onSubmit = (e) => {
        e.preventDefault();
        setValErrors([])

        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setValErrors(data.errors)
        })
    }
    const demoLogin = () => {
        setCredential('iEmmaDemo')
        setPassword('password3')

        return dispatch(sessionActions.login({ credential, password })).then(<Redirect to='/answers'/>)
    }
    const toSignup = () => {
        return (<Redirect to='/signup' />)
    }

    return (
        <div>
            <form className={styles.form} onSubmit={onSubmit}>
                <ul>
                    {valErrors.map((error, i) => (
                        <li key={i}>{error}</li>)
                    )}
                </ul>
                <div>
                    <label className={styles.label}>
                        Username or Email Address:
                        <input
                        className={styles.input}
                        type='text'
                        name='credential'
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                        />
                    </label>
                </div>
                <div>
                    <label className={styles.label}>
                        Password:
                        <input
                            className={styles.input}
                            type='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <button className={styles.button} type='submit'>Log In</button>
                    <button className={styles.button} onClick={demoLogin}>Demo Login</button>
                </div>
                <div>
                    <p>New to Responsa?</p>
                    <Link to='/signup' onClick={toSignup}>Sign up!</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
