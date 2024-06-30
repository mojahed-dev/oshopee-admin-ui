import React, { useState } from 'react';
import { AiOutlineDashboard } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { BsCartCheck } from "react-icons/bs";
import { SiBrandfolder } from "react-icons/si";
import { MdOutlineCategory } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { IoColorPaletteOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";
import { RiBloggerLine } from "react-icons/ri";
import { CiCircleQuestion } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { LuDatabase } from "react-icons/lu";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;


const Mainlayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
        <h2 className='text-white fs-5 text-center py-3 mb-0'>
          <span className='sm-logo'>DD</span>
          <span className='lg-logo'>DigiDrift</span>
        </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key}) => {
            if (key == 'signout') {

            }else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <CiUser className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <LuDatabase className='fs-4' />,
              label: 'Catalog',
              children: [
                {
                  key: 'product',
                  icon: <IoAddCircleOutline className='fs-4' />,
                  label: 'Add Product',
                },
                {
                  key: 'product-list',
                  icon:<BsCartCheck className='fs-4' />,
                  label: 'Product List',
                },
                {
                  key: 'brand',
                  icon:<SiBrandfolder className='fs-4' />,
                  label: 'Brand',
                },
                {
                  key: 'list-brand',
                  icon:<CiViewList className='fs-4' />,
                  label: 'Brand List',
                },
                {
                  key: 'category',
                  icon:<MdOutlineCategory className='fs-4' />,
                  label: 'Category',
                },
                {
                  key: 'category-list',
                  icon:<MdOutlineCategory className='fs-4' />,
                  label: 'Category List',
                },
                {
                  key: 'color',
                  icon:<IoColorPaletteOutline className='fs-4' />,
                  label: 'Color',
                },
                {
                  key: 'color-list',
                  icon:<IoColorPaletteOutline className='fs-4' />,
                  label: 'Color List',
                },
              ]
            },
            {
              key: 'orders',
              icon: <BsCart2 className='fs-4' />,
              label: 'Orders',
            },
            {
              key: 'blog',
              icon: <RiBloggerLine className='fs-4' />,
              label: 'Blogs',
              children: [
                {
                  key: 'blog',
                  icon:<IoAddCircleOutline className='fs-4' />,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <GoChecklist className='fs-4' />,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <IoAddCircleOutline className='fs-4' />,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <GoChecklist className='fs-4' />,
                  label: 'Blog Category List',
                },
              ]
            },
            {
              key: 'enquiries',
              icon: <CiCircleQuestion className='fs-4' />,
              label: 'Equiries',
            },
          
            
          ]}
        />
      </Sider>
      <Layout>
        <Header
        className='d-flex justify-content-between ps-2 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-3 align-items-center">
            <div></div>
            <div className='d-flex align-items-center gap-4'>
              <div className='position-relative'>
                <FaBell className='fs-4' />
                <span className="badge bg-warning rounded-circle p-1 position-absolute">3</span>
              </div>
              <div>
                <img width={32} height={32} className='img-fluid' src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="profile image" />
                </div>
            </div>
            <div>
              <h5 className='mb-0'>Mojahed</h5>
              <p className='mb-0'>mojahed.alo.habib@gmail.com</p>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
        
            <Outlet />
          
        </Content>
      </Layout>
    </Layout>
  );
};

export default Mainlayout