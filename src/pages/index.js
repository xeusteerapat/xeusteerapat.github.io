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
      <p>
        My <Link to="/blog">Blog</Link> are about Node.js, React.js and some
        interesting topic
      </p>
      <p>You can read more about me</p>
      <div>
        <p>
          See more in <Link to="/project">Projects</Link>
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
