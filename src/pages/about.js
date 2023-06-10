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
    marginBottom: '1.5rem',
  };

  return (
    <Layout>
      <Head title="About Me" />
      <h1>About Me</h1>
      <Img fluid={data.imageOne.childImageSharp.fluid} style={profileStyle} />
      <h2>
        Hello, My name is <b>Teerapat</b>
      </h2>
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
          And now, I'm Software Engineer at{' '}
          <a href="https://mohara.co" target="_blank" rel="noopener noreferrer">
            MOHARA
          </a>
        </p>
        <p>My Skills are focusing on</p>
        <ul>
          <li>Node/Express</li>
          <li>MongoDB</li>
          <li>Typescript</li>
          <li>Serverless Framework (AWS Lambda)</li>
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
          href="https://teerapat-prommarak-resume-2023.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/teerapat-prommarak/"
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
