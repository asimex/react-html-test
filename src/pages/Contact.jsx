import React from "react";
import { Form, Input, Button } from "antd";

export default function Contact() {
  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h1>Contact Us</h1>
      <Form layout="vertical">
        <Form.Item label="Name">
          <Input placeholder="Your name" />
        </Form.Item>
        <Form.Item label="Email">
          <Input placeholder="Your email" />
        </Form.Item>
        <Form.Item label="Message">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
}
