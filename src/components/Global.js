import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";
import "../css/global.scss";

import App from "@/js/personnelList/index";
import EditTable from "../js/editTable/index";
import HoverEditList from "../js/hoverEditList/index";
import Trees from "../js/tree/index";
import TestPage from "@/js/test-page";
import Home from "@/js/home";
import TestRedux from "@/js/testRedux";
import WrittenExamination from "@/js/written-examination";
import ReactContext from "@/js/reactContext";

import { user, team } from "../util/menus";

import { HashRouter, Route, Switch } from "react-router-dom";

import styles from "./index.scss";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  exportElement = () => {
    return <div>123123</div>;
  };

  componentDidMount() {
    // window.onhashchange = ()=>{
    //   this.setState({
    //       hash:window.location.hash
    //   });
    // }
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          theme="dark"
        >
          <div className="logo" />
          <Menu theme="dark" defaultOpenKeys={["sub1"]} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              {user.map((item, index) => {
                return (
                  <Menu.Item key={index}>
                    <Link to={item.url}>{item.name}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>

            <Menu.Item key="9" className="check">
              <Link to="/index/bill">
                <Icon type="file" />
                <span>用户管理</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header" />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            <div
              className={styles.box}
              style={{
                padding: 24,
                background: "#fff",
              }}
            >
              <HashRouter>
                <div>
                  <Route path="/index" exact component={Home} />
                  <Route path="/index/bill" component={App} />
                  <Route path="/index/editTable" component={EditTable} />
                  <Route
                    path="/index/hoverEditList"
                    component={HoverEditList}
                  />
                  <Route path="/index/tree" component={Trees} />
                  <Route path="/index/tom" component={TestPage} />
                  <Route path="/index/testRedux" component={TestRedux} />
                  <Route
                    path="/index/writtenExamination"
                    component={WrittenExamination}
                  />
                  <Route path="/index/reactContext" component={ReactContext} />
                </div>
              </HashRouter>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design/Fusion Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;
