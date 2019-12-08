import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {LayoutRoutes} from "router";

import sliderEach from "utils/sliderEach";

import {withRouter}  from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
@withRouter

class Wrapper extends Component {
    state = {
        collapsed: false,
      };
      onCollapse = collapsed => {
        this.setState({ collapsed });
      };
    render() {
        return (
            <Layout style={{ minHeight: '100vh'}}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['/home']} mode="inline" onClick={this.handleto.bind(this)}>
                        {
                            sliderEach(LayoutRoutes)
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{this.props.children}</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
    handleto({key}){
        this.props.history.push(key)
    }
}
export default Wrapper;