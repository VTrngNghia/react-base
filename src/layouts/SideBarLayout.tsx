import { Layout } from "antd";
import { RouterOutlet } from "react-hook-guard";
import { RouterOutletProps } from "react-hook-guard/lib/esm/components/RouterOutlet";
import { useEffect } from "react";

const SideBarLayout = (props: RouterOutletProps) => {
  useEffect(() => {
    console.log("Sidebar rendered");
  }, []);
  return (
    <Layout>
      <Layout.Sider />
      <Layout.Header />
      <Layout.Content>
        <RouterOutlet {...props} />
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
};

export default SideBarLayout;
