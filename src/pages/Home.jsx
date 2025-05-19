import React from "react";
import { Layout, Typography, Button, Row, Col, Card } from "antd";
import {
  ShoppingOutlined,
  GiftOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Navbar/Header */}
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

      {/* Hero Section */}
      <Content style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <Title>Welcome to the Best Online Store</Title>
        <Paragraph>
          Discover amazing deals on clothing, electronics, and more. Fast
          delivery. Secure payments.
        </Paragraph>
        <Button type="primary" size="large" style={{ marginTop: "1rem" }}>
          Start Shopping
        </Button>
      </Content>

      {/* Feature Cards */}
      <Content style={{ padding: "2rem" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <Card bordered={false} hoverable>
              <ThunderboltOutlined style={{ fontSize: "2rem" }} />
              <Title level={4}>Fast Delivery</Title>
              <Paragraph>Get your products within 24–48 hours anywhere.</Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card bordered={false} hoverable>
              <GiftOutlined style={{ fontSize: "2rem" }} />
              <Title level={4}>Exclusive Offers</Title>
              <Paragraph>Enjoy weekly deals and festive discounts.</Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card bordered={false} hoverable>
              <ShoppingOutlined style={{ fontSize: "2rem" }} />
              <Title level={4}>150+ Products</Title>
              <Paragraph>Browse our wide range of top-quality items.</Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: "center", background: "#fafafa" }}>
        Shopping Time © {new Date().getFullYear()} | All rights reserved.
      </Footer>
    </Layout>
  );
}
