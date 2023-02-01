/* 这个 layout
  M |-----------
  E |
  N |  Content
  U |
  ------Footer--
*/
import React, { ReactNode, useState } from 'react'

import Menu from '@C/Menus'
import FooterText from './material/Footer'
import { Layout } from 'antd'
const { Sider, Content, Footer } = Layout
const MainPage: React.FC<{ children?: ReactNode }> = (prop) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  return (<>
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <Sider
        collapsible
        theme='light'
        collapsed={collapsed}
        onCollapse={(isOpen) => setCollapsed(isOpen)}
      >
        <Menu />
      </Sider>
      <Layout className="layout-main">
        <Content style={{ height: 'calc(100vh-24px)', margin: '16px 16px', overflow: 'auto' }}>
          {prop.children}
        </Content>
        <Footer style={{ height: '24px', textAlign: 'center' }}>
          <FooterText />
        </Footer>
      </Layout>
    </Layout>
  </>)
}
export default MainPage
