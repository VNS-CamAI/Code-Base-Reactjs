import React, { useEffect, useRef, useState } from "react";
import {
  PieChartOutlined,
  UserOutlined,
  LogoutOutlined,
  NotificationOutlined,
  AimOutlined,
} from "@ant-design/icons";
import { theme, type MenuProps, Layout, Menu, Row, Button, Breadcrumb } from "antd";

import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";

import { HOME, LOGIN } from "../../routes/routes.constant";
import logo from '../../logo.svg'

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Trang chủ", HOME, <PieChartOutlined />),
];
const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const breadcumbRef = useRef<any>();

  const [collapsed, setCollapsed] = useState(false);
  const [checkHover, setCheckHover] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  // const clickMenuItem = ({ key, keyPath }: any) => {
  //   console.log(key, keyPath);
  //   if (keyPath.some((it: any) => it === "/manager-pipeline")) {
  //     setCollapsed(true)
  //     setCheckHover(true)
  //     setTimeout(() => {
  //       setCheckHover(false)
  //     }, 2000)
  //   }
  // }
  const clickMenuItem = ({ key, keypath }: any) => {

    navigate(key);
  };
  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    if(!token){
        navigate(LOGIN)
    }
  },[])

  return (
    <Layout style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <Sider onMouseLeave={() => {
        setCollapsed(true)
      }} onMouseMove={() => {
        if (!checkHover) {
          setCollapsed(false)
        }
      }} collapsible collapsed={collapsed} onCollapse={(value) => {
        setCollapsed(value)

      }}>
        <div onMouseMove={() => {
        }}>
          <div>
            <img src={logo}  alt="logo" />
          </div>

          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onClick={clickMenuItem}
          />
        </div>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row justify={"space-between"} style={{ padding: "0 16px" }}>
            <span style={{ fontSize: 24, fontWeight: 600 }}>BASE CODE</span>
            <span>
              <Button type="text" icon={<NotificationOutlined />}>
                Thông báo
              </Button>
              <Button type="text" icon={<LogoutOutlined />}>
                Đăng xuất
              </Button>
            </span>
          </Row>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            Home
          </Breadcrumb>
          <div
            style={{
              padding: 12,
              minHeight: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          BASE CODE © {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
