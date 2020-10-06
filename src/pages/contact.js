import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import Twitter from '../../static/logo-twitter.svg';
import Linkedin from '../../static/logo-linkedin.svg';
import Github from '../../static/logo-github.svg';

const ContactPage = () => {
  const logoStyle = {
    width: '30px',
    height: 'auto',
    marginRight: '5px',
    marginBottom: '-5px'
  };

  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        <a
          href="https://twitter.com/xeusteerapat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Twitter} alt="Twitter" style={logoStyle} />
          xeusteerapat
        </a>
      </p>
      <p>
        <a
          href="https://github.com/xeusteerapat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="Github" style={logoStyle} />
          Github
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/teerapat-prommarak-44923697/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="Linkedin" style={logoStyle} />
          Linkedin
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
