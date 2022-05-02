import ProfileButton from './ProfileButton'
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import LoginFormModal from '../LoginFormModal'
import styles from './Navigation.module.css'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user)

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
        <ProfileButton user={sessionUser} />
        )
    } else sessionLinks = (
        <>
            <LoginFormModal />
            <NavLink className={styles.sessionLinks} to='/signup'>Sign Up</NavLink>
        </>
    )
    return (
        <nav>
            <ul>
                <li>
                    <NavLink className={styles.sessionLinks} exact to='/'>Home</NavLink>
                    {isLoaded && sessionLinks}
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;
