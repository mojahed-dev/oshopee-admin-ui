import React from 'react';
import { GoArrowDownRight, GoArrowDownLeft, GoArrowUpRight, GoArrowUpLeft } from "react-icons/go";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { Column } from '@ant-design/plots';
import { Table } from 'antd';


function Dashboard() {
  const data = [
    { type: 'Jan', value: 0.16 },
    { type: 'Feb', value: 0.125 },
    { type: 'Mar', value: 0.24 },
    { type: 'Apr', value: 0.19 },
    { type: 'May', value: 0.22 },
    { type: 'Jun', value: 0.05 },
    { type: 'Jul', value: 0.01 },
    { type: 'Aug', value: 0.45 },
    { type: 'Sep', value: 0.35 },
    { type: 'Oct', value: 0.90 },
    { type: 'Nov', value: 0.1 },
    { type: 'Dec', value: 0.100 },
  ];

  const config = {
    data,
    xField: 'type',
    yField: 'value',
    style: {
      fill: ({ type }) => {
        return '#ffd333';
      },
    },
    label: {
      text: (originData) => {
        const val = parseFloat(originData.value);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
        return '';
      },
      offset: 10,
    },
    legend: false,
    meta: {
      type: {
        alias: "Month"
      },
      sales: {
        alias: "Income"
      }
    }
  };

  const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      product: 32,
      status: `Completed ${i}`,
    });
  }


  return (
    <div>
      <h3 className='mb-4'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white rounded-3 p-3'>
          <div>
            <p className='mb-0'>Total</p>
            <h3>$1000</h3>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6><GoArrowDownRight />32%</h6>
            <p className='mb-0'>Compare to April 2022</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white rounded-3 p-3'>
          <div>
            <p className='mb-0'>Total</p>
            <h3>$1000</h3>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'><FaArrowTrendDown /> 32%</h6>
            <p className='mb-0'>Compare to April 2022</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white rounded-3 p-3'>
          <div>
            <p className='mb-0'>Total</p>
            <h3>$1000</h3>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'><FaArrowTrendUp /> 32%</h6>
            <p className='mb-0'>Compare to April 2022</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Income Statistics</h3>
        <div>
          <Column {...config} />;
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">
          Recent Orders
        </h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>

    </div>
  )
}

export default Dashboard