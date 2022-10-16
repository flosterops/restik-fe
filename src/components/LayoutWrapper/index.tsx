import React, { PropsWithChildren } from "react";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import "./index.scss";
import { Layout } from "antd";

interface Props {
  withAside?: boolean;
}

export const LayoutWrapper = ({
  children,
  withAside = false,
}: PropsWithChildren<Props>) => {
  return (
    <Layout className="layout-wrapper">
      {withAside && (
        <Layout.Sider>
          <Sidebar />
        </Layout.Sider>
      )}

      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>{children}</Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </Layout>
  );
};
