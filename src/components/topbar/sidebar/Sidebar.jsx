import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import SellIcon from '@mui/icons-material/Sell';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaidIcon from '@mui/icons-material/Paid';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailIcon from '@mui/icons-material/Mail';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ChatIcon from '@mui/icons-material/Chat';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">Dashboard</div>
          <ul className="sidebarList">
          <nav>
        <Link to="/" style={{ textDecoration: 'none' }}> <li className="sidebarListItem">
              <HomeIcon className='sidebarIcon' />
              Home
            </li></Link>
      </nav>
            <li className="sidebarListItem">
              <CandlestickChartIcon className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarListItem">
              <SellIcon className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarTitle">Quick Menu</div>
          <ul className="sidebarList">
          <nav>
        <Link to="/users"  style={{ textDecoration: 'none' }}><li className="sidebarListItem">
              <PersonIcon className='sidebarIcon' />
              Users
            </li></Link>
      </nav>
      <nav>
        <Link to="/products" style={{ textDecoration: 'none' }}>  <li className="sidebarListItem">
              <InventoryIcon className='sidebarIcon' />
             Products
            </li></Link>
      </nav>
          
            <li className="sidebarListItem">
              <PaidIcon  className='sidebarIcon' />
              Transactions
            </li>
            <li className="sidebarListItem">
              <AssessmentIcon className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarTitle">Notifications</div>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailIcon className='sidebarIcon' />
             Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackIcon className='sidebarIcon' />
             Feedback
            </li>
            <li className="sidebarListItem">
              <ChatIcon className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarTitle">Staff</div>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ManageAccountsIcon className='sidebarIcon' />
              Manage
            </li>
            <li className="sidebarListItem">
              <QueryStatsIcon  className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarListItem">
              <BarChartIcon className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
