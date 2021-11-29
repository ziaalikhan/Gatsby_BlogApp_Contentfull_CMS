import React from 'react';
import { Link } from 'gatsby';
import * as styles from '../style/main.module.css';
export default function Navbar() {
    return (
        <div>
            <Link className={styles.links} to='/'>
                <div className={styles.navbar}>
                    <div>
                        <p className={styles.logo}>My<span className={styles.navLogo}>Blog</span></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
