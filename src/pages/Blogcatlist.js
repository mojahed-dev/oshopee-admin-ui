import React from 'react';
import { Table } from 'antd';

const data = [
    { type: 'Jan', value: 0.16 },
    { type: 'Feb', value: 0.125 },
    { type: 'Mar', value: 0.24 },
    { type: 'Apr', value: 0.19 },
    { type: 'May', value: 0.22 },
    { type: 'Jun', value: 0.05 },
    { type: 'Jul', value: 0.01 },
    { type: 'Aug', value: 0.45 },
    { type: 'Sep', value: 0.35},
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

function Blogcatlist() {
  return (
    <div>
        <h4 className='mb-4'>Blog Categories</h4>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default Blogcatlist