import React from 'react'
import "./featuredInfo.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function featured() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1200</span>
                <span className="featuredMoneyRate">$-11.4 <ArrowDownwardIcon className='FeaturedIcon negative'/>
                </span>
                         </div>
                         <span className="featuredSub">Compared to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$ 1200</span>
                <span className="featuredMoneyRate">$12<ArrowUpwardIcon  className='FeaturedIcon positive'/>
                </span>
                         </div>
                         <span className="featuredSub">Compared to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Profit</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$ 100</span>
                <span className="featuredMoneyRate">$-12<ArrowDownwardIcon  className='FeaturedIcon negative'/>
                </span>
                         </div>
                         <span className="featuredSub">Compared to Last Month</span>
        </div>
               </div>
  )
}
