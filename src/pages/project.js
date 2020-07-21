import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const Project = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <h1>My Project</h1>
      <h2>Fullstack Project</h2>
      <p>
        <a
          href="https://www.youtube.com/watch?v=eCV7kTaMRPU"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rider - Carpool application
        </a>
      </p>
      <ul>- Fullstack Node/Express.js and React.js</ul>
      <ul>- Integrate with Google Map API</ul>
      <ul>
        -{' '}
        <a
          href="https://github.com/Rider-Codecamp5"
          target="_blank"
          rel="noopener noreferrer"
        >
          See github project
        </a>
      </ul>
      <br />
      <h2>Frontend</h2>
      <p>
        <a
          href="https://xeusteerapat.github.io/CC5-HTML-BASIC/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Basic HTML Layout
        </a>
      </p>
      <p>
        <a
          href="https://xeusteerapat.github.io/bbc-clone/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BBC Website clone
        </a>
      </p>
      <p>
        <a
          href="https://xeusteerapat.github.io/landing-page-codecamp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Landing page layout
        </a>
      </p>
      <p>
        <a
          href="https://react-typescript-crud.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Simple React app with CRUD operations
        </a>
      </p>
      <br />
      <h2>Backend</h2>
      <p>
        <a
          href="https://github.com/xeusteerapat/blog-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Graphql API for bloging app
        </a>
      </p>
      <p>
        <a
          href="https://github.com/xeusteerapat/node-typeorm-crud"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js Typescript REST API
        </a>
      </p>
    </Layout>
  );
};

export default Project;
