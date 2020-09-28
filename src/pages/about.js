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
      <div>
        <p>I'm currently in Backend Developer role</p>
        <p>My Skills are focusing on</p>
        <ul>
          <li>Node.js/Express.js</li>
          <li>MongoDB</li>
          <li>Graphql</li>
        </ul>
        <p>I also can develop web application using Frontend Tech like</p>
        <ul>
          <li>HTML/CSS</li>
          <li>React</li>
        </ul>
        <p>And sometimes curious about ML/DL</p>
      </div>
      <p>
        <a
          href="https://docs.google.com/document/d/1QL8sst5b5Qe8iujaYvTHpLN9UnNxfUwNjjV1ApR15ok/edit?usp=sharing"
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
