import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
import { Redirect } from 'react-router-dom';

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
    return (
        <div>
            <form onSubmit={onSubmit}>
                <ul>
                    {valErrors.map((error, i) => (
                        <li key={i}>{error}</li>)
                    )}
                </ul>
                <div>
                    <label>
                        Username or Email Address:
                        <input
                        type='text'
                        name='credential'
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <button type='submit'>Log In</button>
                </div>


            </form>
        </div>
    )
}

export default LoginForm;
