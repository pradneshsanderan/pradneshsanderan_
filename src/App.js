import React from 'react';
import './App.css';
import{Layout,Header,Navigation,Drawer,Content, Button} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="demo-big-content">
      <Helmet>
      <meta charSet="utf-8" />
        <title>
          Pradnesh Sanderan
        </title>
      </Helmet>
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none',color:'white'}} to="/">
          Pradnesh Sanderan
        </Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contact</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}



export default App;
