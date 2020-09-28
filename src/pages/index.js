import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Teerapat</h2>
      <p>Nice to meet you all!</p>
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
      </div>
      <div>
        <p>
          See more in <Link to="/project">Projects</Link>
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
