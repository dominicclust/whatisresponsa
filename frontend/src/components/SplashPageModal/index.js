import {useSelector} from 'react-redux'
import {useState, useContext} from 'react'
import {Link, NavLink, Redirect} from 'react-router-dom';

const SplashPageModal = () => {
    const user = useSelector(state => state.session.user)
    if (!user) return (
        <div>
            
        </div>
    )
}
