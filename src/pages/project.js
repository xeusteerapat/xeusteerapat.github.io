import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import ExternalLink from '../../static/external-link.svg';
import projectStyles from './project.module.scss';

const Project = () => {
  const logoStyle = {
    width: '25px',
    height: 'auto',
    marginRight: '1px',
    marginBottom: '-5px',
  };

  return (
    <Layout>
      <Head title="Projects" />
      <h1>My Projects</h1>
      <div>
        <h2 className={projectStyles.header}>Fullstack</h2>
      </div>
      <div className={projectStyles.wrapper}>
        <div className={projectStyles.item}>
          <h4>Rider - Carpool App</h4>
          <p>- Fullstack Node/Express.js and React.js</p>
          <p>- MySQL/Sequelize Database</p>
          <p>- Integrate with Google Map API</p>
          <p>- Socket.IO</p>
          <a
            href="https://www.youtube.com/watch?v=eCV7kTaMRPU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Demo
          </a>
          <br />
          <a
            href="https://github.com/Rider-Codecamp5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Github
          </a>
        </div>
        <div className={projectStyles.item}>
          <h4>Favorite Links</h4>
          <p>- Personal favorite links</p>
          <p>- Netlify serverless functions</p>
          <p>- FaunaDB database and Graphql API</p>
          <p>- React and Bootstrap</p>
          <a
            href="https://friendly-mestorf-a0d642.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Demo
          </a>
          <br />
          <a
            href="https://github.com/xeusteerapat/fauna-jamstack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Github
          </a>
        </div>
        <div className={projectStyles.item}>
          <h4>Foody - E-Commerce</h4>
          <p>- E-Commerce food shop</p>
          <p>- Commerce.js API</p>
          <p>- React</p>
          <p>- Stripe payment</p>
          <a
            href="https://commercejs-react.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Demo
          </a>
          <br />
          <a
            href="https://github.com/xeusteerapat/commercejs-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Github
          </a>
        </div>
      </div>
      <div>
        <h2 className={projectStyles.header}>Frontend</h2>
      </div>
      <div className={projectStyles.wrapper}>
        <div className={projectStyles.item}>
          <h4>BBC Website clone</h4>
          <p>- HTML5</p>
          <p>- CSS Grid</p>
          <a
            href="https://xeusteerapat.github.io/bbc-clone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Demo
          </a>
        </div>
        <div className={projectStyles.item}>
          <h4>Basic HTML Layout</h4>
          <p>- HTML5</p>
          <p>- CSS Grid & Flexbox</p>
          <p>- API request</p>
          <a
            href="https://xeusteerapat.github.io/CC5-HTML-BASIC/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Demo
          </a>
        </div>
        <div className={projectStyles.item}>
          <h4>Landing page layout</h4>
          <p>- HTML5</p>
          <p>- CSS Grid & Flexbox</p>
          <a
            href="https://xeusteerapat.github.io/landing-page-codecamp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Demo
          </a>
        </div>
        <div className={projectStyles.item}>
          <h4>React Typescript</h4>
          <p>- React</p>
          <p>- Typescript</p>
          <p>- CRUD operations</p>
          <a
            href="https://react-typescript-crud.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Demo
          </a>
        </div>
        <div className={projectStyles.item}>
          <h4>PM2.5 Watcher</h4>
          <p>- Next.js</p>
          <p>- Apex Chart</p>
          <p>- API Request</p>
          <a
            href="https://pm25-watcher.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Demo
          </a>
          <br />
          <a
            href="https://github.com/xeusteerapat/pm25-watcher"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Github
          </a>
        </div>
      </div>
      <div>
        <h2 className={projectStyles.header}>Backend</h2>
      </div>
      <div className={projectStyles.wrapper}>
        <div className={projectStyles.item}>
          <h4>E-Commerce API</h4>
          <p>- Node.js/Typescript</p>
          <p>- Serverless Framework</p>
          <p>- AWS Lambda</p>
          <p>- AWS S3</p>
          <p>- AWS Cognito</p>
          <p>- DynamoDB</p>
          <a
            href="https://github.com/xeusteerapat/ecommly-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Github
          </a>
        </div>
        <div className={projectStyles.item}>
          <h4>Graphql API for bloging app</h4>
          <p>- Apollo server Graphql</p>
          <p>- Typescript</p>
          <p>- User authentication</p>
          <a
            href="https://github.com/xeusteerapat/blog-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Github
          </a>
        </div>
        <div className={projectStyles.item}>
          <h4>Node.js Typescript REST API</h4>
          <p>- Backend api with node.js and typescript</p>
          <p>- MySQL database with TypeORM</p>
          <p>- CRUD operations</p>
          <p>- User authentication</p>
          <a
            href="https://github.com/xeusteerapat/node-typeorm-crud"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Github
          </a>
        </div>
        <div className={projectStyles.item}>
          <h4>E-Commerce Graphql API</h4>
          <p>- Graphql API with nexus schema</p>
          <p>- Database tool with Prisma</p>
          <p>- CRUD operations</p>
          <a
            href="https://www.nexus-products-dev.digital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ExternalLink} alt="See more" style={logoStyle} />
            Demo
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Project;
