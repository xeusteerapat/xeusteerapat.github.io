import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const Project = () => {
  return (
    <Layout>
      <Head title="About Me" />
      <h1>My Project</h1>
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
          href="https://xeusteerapat.github.io/html-css-booking-form/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Booking form
        </a>
      </p>
      <p>
        <a
          href="https://xeusteerapat.github.io/pimclick-contact-form/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pimclick Contact Form
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
    </Layout>
  );
};

export default Project;
