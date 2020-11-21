import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const Project = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <h1>My Project</h1>
      <h2>Fullstack Project</h2>
      <h4>
        <a
          href="https://www.youtube.com/watch?v=eCV7kTaMRPU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ul>Rider - Carpool application</ul>
        </a>
      </h4>
      <div>
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
      </div>
      <h4>
        <ul>
          <a
            href="https://friendly-mestorf-a0d642.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Favorite Links
          </a>
        </ul>
      </h4>
      <div>
        <p>Create a personal favorite links</p>
        <ul>- Netlify serverless functions</ul>
        <ul>
          -{' '}
          <a href="https://fauna.com" target="_blank" rel="noopener noreferrer">
            FaunaDB database and Graphql API
          </a>
        </ul>
        <ul>- React and Bootstrap</ul>
        <ul>
          -{' '}
          <a
            href="https://github.com/xeusteerapat/fauna-jamstack"
            target="_blank"
            rel="noopener noreferrer"
          >
            See github project
          </a>
        </ul>
      </div>

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
      <p>
        <a
          href="https://github.com/xeusteerapat/nexus-prisma"
          target="_blank"
          rel="noopener noreferrer"
        >
          E-Commerce products Graphql API
        </a>
        <ul>
          - You can check the{' '}
          <a
            href="https://www.nexus-products-dev.digital"
            target="_blank"
            rel="noopener noreferrer"
          >
            Graphql Playground
          </a>
        </ul>
      </p>
    </Layout>
  );
};

export default Project;
