import React from 'react';
import classes from './Footer.module.css';

const Footer = () => (
  <div className={classes.footer}>
    <p>© {new Date().getFullYear()} Kalmar Lorand</p>
  </div>
);

export default Footer;
