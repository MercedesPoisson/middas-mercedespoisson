import React from "react";
import Layout from "./layout";

const withLayout = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  );
};

export default withLayout;