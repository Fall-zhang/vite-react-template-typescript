import React, { ReactNode } from 'react'
import styles from './index.module.less'
import { Menu, Tooltip } from 'antd'
import type { MenuProps } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import {
  GithubOutlined,
  CreditCardOutlined,
  DesktopOutlined,
  PieChartOutlined,
  TranslationOutlined,
  TableOutlined
} from '@ant-design/icons'
import { formatMessage } from '@/core/locales'
type MenuItem = Required<MenuProps>['items'][number];

// <Menu.SubMenu key="sub2" icon={<DesktopOutlined />} title={formatMessage({ id: 'menu-components' })}>
//   <Menu.Item key="/form">
//     <Link to={'/form'}>自定义表单</Link>
//   </Menu.Item>
// </Menu.SubMenu>
// <Menu.Item key="/locales" icon={<TranslationOutlined />}>
//   <Link to={'/locales'}>{formatMessage({ id: 'menu-i18n' })}</Link>
// </Menu.Item>
// <Menu.SubMenu key="/table" icon={<TableOutlined />} title={formatMessage({ id: 'menu-table' })}>
//   <Menu.Item key="/table/base">
//     <Link to={'/table/base'}>基础表格</Link>
//   </Menu.Item>{' '}
//   <Menu.Item key="/table/drag">
//     <Link to={'/table/drag'}>拖拽表格</Link>
//   </Menu.Item>{' '}
//   <Menu.Item key="/table/edit">
//     <Link to={'/table/edit'}>编辑表格</Link>
//   </Menu.Item>
// </Menu.SubMenu>
// ]

// <Menu.Item key="/auth" icon={<CreditCardOutlined />}>
//   <Link to={'/auth'}>{formatMessage({ id: 'menu-roots' })}</Link>
// </Menu.Item>
const genMenuItem = (key: string, label: string, icon?: ReactNode, children?: MenuItem[]): MenuItem => ({
  key: key,
  icon: icon,
  label: <Link to={key}>{label}</Link>,
  children: children
})

const menuItems: MenuProps['items'] = [
  genMenuItem('/works', formatMessage({ id: 'menu-works' }), < CreditCardOutlined />),
  genMenuItem('/contact', formatMessage({ id: 'menu-contact' }), < GithubOutlined />),
  genMenuItem('/contact', formatMessage({ id: 'menu-contact' }), < GithubOutlined />),
  genMenuItem('/contact', formatMessage({ id: 'menu-contact' }), < GithubOutlined />),
  genMenuItem('/contact', formatMessage({ id: 'menu-contact' }), < GithubOutlined />),
  genMenuItem('/contact', formatMessage({ id: 'menu-contact' }), < GithubOutlined />),
  genMenuItem('/icon', formatMessage({ id: 'menu-icon' }), <PieChartOutlined />)
]
const HomePage: React.FC = () => {
  // 收缩侧边栏
  const message = formatMessage({ id: 'frontEnd' })
  return (
    <>
      <div className={styles.title}>{message}</div>
      <Menu
        theme='light'
        className={styles.menu}
        defaultSelectedKeys={[`${useLocation().pathname}`]}
        mode="inline"
        items={menuItems}
      >
      </Menu>
    </>
  )
}

export default HomePage
