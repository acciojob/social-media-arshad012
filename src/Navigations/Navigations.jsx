import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigations.module.css';
import { RefreshContext } from '../Context/RefreshContext';

const Navigations = () => {
    const {refreshButtonDisabled, getNotifications} = useContext(RefreshContext);
    
    return (
        <nav className={styles.navbar_main}>
            <h1>Gen<span>Z</span></h1>
            <div className={styles.navbar}>
                <ul className={styles.nav_links}>
                    <li>
                        <button>
                            <Link to='/'>Posts</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to='/users'>Users</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to='/notifications'>Notifications</Link>
                        </button>
                    </li>
                </ul>
                <div className={styles.refresh_button}>
                    <button className='button' onClick={getNotifications} disabled={refreshButtonDisabled}>Refresh Notifications</button>
                </div>
            </div>
        </nav>
    )
}

export default Navigations;