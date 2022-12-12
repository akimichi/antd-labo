import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/reset.css';
const { Header, Footer, Sider, Content } = Layout;

const NavBar = () => (
  <>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>

  </>
);
export default NavBar;
