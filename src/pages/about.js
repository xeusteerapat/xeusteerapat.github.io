import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import Img from 'gatsby-image';

const AboutPage = ({ data }) => {
  const profileStyle = {
    width: '20%',
    height: 'auto',
    borderRadius: '50%',
    marginBottom: '1.5rem'
  };

  return (
    <Layout>
      <Head title="About Me" />
      <h1>About Me</h1>
      <Img fluid={data.imageOne.childImageSharp.fluid} style={profileStyle} />
      <h3>
        Hello, My name is <b>Teerapat</b>
      </h3>
      <div>
        <p>
          Former Construction Engineer <span>👷🏻‍♂️</span>
        </p>
        <p>
          Former Research Assistant <span>👨‍🔬</span>
        </p>
        <p>
          Former 3D CAD Engineer (Piping works) <span>🏭</span>
        </p>
        <p>
          And now, I'm currently in Backend Developer role at{' '}
          <a
            href="https://www.vonder.co.th"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vonder
          </a>
        </p>
        <p>My Skills are focusing on</p>
        <ul>
          <li>Node/Express</li>
          <li>MongoDB</li>
          <li>Graphql</li>
        </ul>
        <p>
          I also can develop web application using Frontend Technology such as
        </p>
        <ul>
          <li>HTML/CSS</li>
          <li>React</li>
        </ul>
        <p>And sometimes curious about ML/DL</p>
      </div>
      <p>
        <a
          href="https://app.enhancv.com/share/82acfaf1?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
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

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "images/profile_photo.jpg" }) {
      ...fluidImage
    }
  }
`;
