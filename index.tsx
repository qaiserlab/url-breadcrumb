import React, { useState } from 'react';
import { render } from 'react-dom';
import { Button } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';

import "antd/dist/antd.css";

import UrlBreadcrumb from './UrlBreadcrumb';

function App() {
  const [url, setUrl] = useState('/test/ok/address/next');
  
  const handleClick = () => {
    setUrl('http://www.test.com/change/alamat/value');
  };

  return (
    <React.Fragment>
      <UrlBreadcrumb url={url} icon={<DashboardOutlined />} />
      <br />
      <Button onClick={handleClick}>Change URL</Button>
      <br />
      {url}
    </React.Fragment>
  );
}

render(<App />, document.getElementById('root'));
