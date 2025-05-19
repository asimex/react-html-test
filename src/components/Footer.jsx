import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default function SiteFooter() {
  return (
    <Footer style={{ textAlign: "center", background: "#fafafa" }}>
      Shopping Time © {new Date().getFullYear()} | All rights reserved.
    </Footer>
  );
}
// Compare this snippet from my-html-exporter/src/components/Header.jsx: