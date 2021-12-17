import React from 'react'

import Wrapper from '../Wrapper';

import logo from '../../logo.svg';

import styles from './styles.module.css'


const Header = () => (<header className={styles.header}>
    <Wrapper>
    <img src={logo} className={styles.logo} alt="logo" />
    </Wrapper>
</header>);

export default Header;