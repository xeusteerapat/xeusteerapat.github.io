import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About Me" />
      <h1>About Me</h1>
      <p>
        Hello, My name is <b>Teerapat</b>
      </p>
      <p>I currently learning about web development.</p>
      <p>And also curious about ML/DL</p>
      <p>
        <a
          href="https://xeusteerapat.github.io/resume/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/teerapat-prommarak-44923697/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </p>
    </Layout>
  );
};

export default AboutPage;
