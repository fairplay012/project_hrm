import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  CalendarOutlined,
  StarOutlined,
  UserSwitchOutlined,
  RotateLeftOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import {
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function Layout({ children }) {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("Employee", "employee", <MailOutlined />),
    getItem("Report", "report", <AppstoreOutlined />),
    getItem("Praise", "praise", <StarOutlined />),
    getItem("Discipline", "discipline", <UserSwitchOutlined />),
    getItem("Appoint", "appoint", <CalendarOutlined/>),
    getItem("Dismissed", "dismissed", <RotateLeftOutlined />),
  ];
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(`/${e.key}`);
  };
  const location = useLocation();

  return (
    <Container>
      <Menu
        onSelect={onClick}
        style={{
          width: 256,
        }}
        selectedKeys={location?.pathname?.slice?.(1)}
        mode="inline"
        items={items}
        theme="dark"
      />
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
