import React from 'react';
import { useIntl } from 'react-intl';
import reactLogo from './assets/logo.svg';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import {FaChartPie,FaArrowAltCircleLeft,FaGem, FaList, FaUser, FaClipboard, FaFileInvoice, FaCalendar, FaQuestionCircle, FaAddressBook } from 'react-icons/fa';

const Aside = ({ collapsed, toggled, handleToggleSidebar,handleCollapsedChange }) => {
  const intl = useIntl();
  return (
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader
          style={{
            padding: '13px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
        <img width={50} src={reactLogo} alt="react logo" />
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaChartPie />}
            suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
          >
            {intl.formatMessage({ id: 'dashboard' })}
          </MenuItem>
          <MenuItem icon={<FaGem />}> {intl.formatMessage({ id: 'components' })}</MenuItem>
          <MenuItem icon={<FaUser />}> {intl.formatMessage({ id: 'foremen' })}</MenuItem>
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={intl.formatMessage({ id: 'Attendance' })}
            icon={<FaClipboard />}
          >
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={intl.formatMessage({ id: 'Site' })}
            icon={<FaAddressBook />}
          >
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          <MenuItem icon={<FaFileInvoice />}> {intl.formatMessage({ id: 'invoicing' })}</MenuItem>
          <MenuItem icon={<FaCalendar />}> {intl.formatMessage({ id: 'leave' })}</MenuItem>
          <MenuItem icon={<FaQuestionCircle />}> {intl.formatMessage({ id: 'help' })}</MenuItem>
          <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />}>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
        <Menu>
        <MenuItem
            icon={<FaArrowAltCircleLeft />}
            checkedIcon={false}
            uncheckedIcon={false}
            onClick={handleCollapsedChange}
            checked={collapsed}
          >
            {intl.formatMessage({ id: 'Collapse' })}
          </MenuItem>          
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default Aside;
