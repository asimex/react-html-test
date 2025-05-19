import React, { useEffect, useState } from "react";
import {
  Layout,
  Typography,
  Tabs,
  Table,
  Button,
  Alert,
  Spin,
  Avatar,
} from "antd";
import {
  UserOutlined,
  CheckCircleTwoTone,
  ExclamationCircleTwoTone,
} from "@ant-design/icons";
import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const dummyUsers = [
  { key: 1, name: "Alice", role: "admin", active: true },
  { key: 2, name: "Bob", role: "user", active: false },
  { key: 3, name: "Charlie", role: "user", active: true },
];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("guest"); // 'admin', 'user', or 'guest'

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setRole("admin"); // Change to 'user' to test conditional UI
    }, 1500);
  }, []);

  const columns = [
    {
      title: "User",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <span>
          <Avatar icon={<UserOutlined />} style={{ marginRight: 8 }} />
          {text}
        </span>
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => <span style={{ textTransform: "capitalize" }}>{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "active",
      key: "active",
      render: (isActive) =>
        isActive ? (
          <CheckCircleTwoTone twoToneColor="#52c41a" />
        ) : (
          <ExclamationCircleTwoTone twoToneColor="#eb2f96" />
        ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiteHeader />

      <Content style={{ padding: "2rem" }}>
        <Title level={2}>Dashboard</Title>

        {loading ? (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Spin size="large" />
            <Paragraph>Loading dashboard data...</Paragraph>
          </div>
        ) : (
          <>
            {role === "guest" && (
              <Alert
                type="warning"
                message="You are viewing as a guest"
                description="Login to see your dashboard"
                showIcon
                style={{ marginBottom: "1rem" }}
              />
            )}

            {role === "admin" && (
              <>
                <Alert
                  type="success"
                  message="Welcome Admin"
                  description="You have full access to the dashboard"
                  showIcon
                  style={{ marginBottom: "1rem" }}
                />

                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane tab="Users" key="1">
                    <Table columns={columns} dataSource={dummyUsers} pagination={false} />
                  </Tabs.TabPane>

                  <Tabs.TabPane tab="Settings" key="2">
                    <Paragraph>Here you can manage system settings.</Paragraph>
                    <Button type="primary">Save Settings</Button>
                  </Tabs.TabPane>
                </Tabs>
              </>
            )}

            {role === "user" && (
              <>
                <Alert
                  type="info"
                  message="Welcome back!"
                  description="Limited dashboard access"
                  showIcon
                  style={{ marginBottom: "1rem" }}
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
                  alt="dashboard"
                  style={{ width: "100%", maxWidth: 600, borderRadius: 12 }}
                />
              </>
            )}
          </>
        )}
      </Content>

      <SiteFooter />
    </Layout>
  );
}
