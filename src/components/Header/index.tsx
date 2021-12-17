import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@mui/material';

import logo from '../../logo.svg';

import styles from './styles.module.css';

const Header = () => (
  <header className={styles.header}>
    <Container maxWidth="lg">
      <img src={logo} className={styles.logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/dogs">Хорошие мальчики</Link>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
);

export default Header;
