import React from 'react'
import './Topbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
        <div className='topLeft'>
            <span className='logo'>Admin Dashboard</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
<NotificationsIcon className='topBarIcons' />
<span className='topIconBadge'>2</span>
            </div>
            <div className="topbarIconContainer">
<LanguageIcon  className='topBarIcons'/>
<span className='topIconBadge'>2</span>
            </div>
            <div className="topbarIconContainer">
<SettingsIcon  className='topBarIcons' />
<span className='topIconBadge'>2</span>
            </div>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fwoman-looking-down&psig=AOvVaw2lnKg5_kZGW2BN98Vdlj_E&ust=1730280865725000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiym9aks4kDFQAAAAAdAAAAABAJ" alt="" className="topAvatar" />
             </div>
        </div>
    </div>
  )
}
