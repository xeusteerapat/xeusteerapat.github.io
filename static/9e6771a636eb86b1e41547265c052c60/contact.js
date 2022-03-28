import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import Twitter from '../../static/logo-twitter.svg';
import Linkedin from '../../static/logo-linkedin.svg';
import Github from '../../static/logo-github.svg';
import Facebook from '../../static/facebook.svg';

const ContactPage = () => {
  const logoStyle = {
    width: '30px',
    height: 'auto',
    marginRight: '10px',
    marginBottom: '-5px'
  };

  const linkStyle = {
    textDecoration: 'none'
  };

  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        <a
          href="https://www.facebook.com/curiousdevxeus"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <img src={Facebook} alt="Facebook" style={logoStyle} />
          Curious Dev
        </a>
      </p>
      <p>
        <a
          href="https://twitter.com/xeusteerapat"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
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
          style={linkStyle}
        >
          <img src={Github} alt="Github" style={logoStyle} />
          Github
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/teerapat-prommarak/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <img src={Linkedin} alt="Linkedin" style={logoStyle} />
          Linkedin
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
