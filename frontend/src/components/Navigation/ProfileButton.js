import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as sessionActions from '../../store/session'
import styles from './ProfileButton.module.css'

const ProfileButton = ({user}) => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    }

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        }
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu)
    }, [showMenu])

    const logout = (e) => {
        e.preventDefault()
        dispatch(sessionActions.logout())
    }

    return (
        <>
            <button className={styles.button} onClick={openMenu}>
                <i id={styles.i} className="fa-solid fa-id-badge"></i>
            </button>
            {showMenu && user && (
                <ul className={styles.profileDrop}>
                    <li className={styles.profileInfo}>{user.username}</li>
                    <li className={styles.profileInfo}>{user.email}</li>
                    <li>
                        <button className={styles.button} onClick={logout}>
                            Log Out
                        </button>
                    </li>
                </ul>
            )}
        </>
    )
};


export default ProfileButton;
