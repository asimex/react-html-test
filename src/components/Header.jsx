import React from "react";
import { Layout, Typography, Button } from "antd";

const { Header } = Layout;
const { Title } = Typography;

export default function SiteHeader() {
  return (
    <Header
      style={{
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2rem",
        boxShadow: "0 2px 8px #f0f1f2",
      }}
    >
      <Title level={3} style={{ margin: 0 }}>
        🛍️ Shopping Time
      </Title>
      <Button type="primary">Login</Button>
    </Header>
  );
}
