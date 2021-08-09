import React from 'react';
import OutlineButton from '../outline-button/outline-button';
import styles from './header.module.scss';

export default function Header() {
    return (
        <header className={styles.app_header}>
            <div className={styles.header_container}>
                <div>
                    <a href='#' className={styles.logo}>🧑‍🚀</a>
                </div>
                <div>
                    <OutlineButton btn_text='view on github' btn_url='https://github.com/cesarcor/spacex-crew'/>
                </div>
            </div>
        </header>
    )
}