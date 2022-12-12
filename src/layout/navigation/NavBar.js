import React from 'react';
import { Layout } from 'antd';
import { Menu } from 'antd';
import 'antd/dist/reset.css';
const { Header, Content } = Layout;

const NavBar = () => (
  <>
    <Layout>
      <Header>
        <Menu mode="horizontal" >
          <Menu.Item>
            メニュー1
          </Menu.Item>
          <Menu.Item>
            メニュー2
          </Menu.Item>
        </Menu>  
      </Header>
      <Content>Content</Content>
    </Layout>

  </>
);
export default NavBar;
