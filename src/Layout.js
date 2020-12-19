import React, { useState } from 'react';
import Aside from './Aside';
import Main from './Main';
import Navbar from './Navbar'
function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [image] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className='app'>
      <Aside
        image={image}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <Main
        image={image}
        toggled={toggled}
        collapsed={collapsed}
        handleToggleSidebar={handleToggleSidebar}
      />
        <Navbar />
    </div>
  );
}

export default Layout;
