import React from "react";
import { Layout, Card, Row, Col, Typography } from "antd";
import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";


const { Content } = Layout;
const { Title } = Typography;

const dummyProducts = [
  {
    id: 1,
    name: "Red Dress",
    price: "$49",
    image:
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Blue Jeans",
    price: "$59",
    image:
      "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?q=80&w=3124&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Black Sneakers",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1676821537459-f4de7b5ac18e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "White T-Shirt",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Leather Jacket",
    price: "$129",
    image:
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Formal Shoes",
    price: "$99",
  image: "/assets/1.avif",
  },
];


export default function Products() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiteHeader />

      <Content style={{ padding: "3rem" }}>
        <Title level={2}>Our Products</Title>
        <Row gutter={[24, 24]}>
  {dummyProducts.map((item) => (
    <Col xs={24} sm={12} md={8} key={item.id}>
      <Card
        title={item.name}
        bordered={false}
        hoverable
        cover={
          <img
            alt={item.name}
            src={item.image}
            style={{ height: 200, objectFit: "cover" }}
          />
        }
        style={{ borderRadius: "10px" }}
      >
        <p>Price: {item.price}</p>
      </Card>
    </Col>
  ))}
</Row>

      </Content>

      <SiteFooter />
    </Layout>
  );
}
