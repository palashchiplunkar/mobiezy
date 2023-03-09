import React from 'react';
import "../css/CustomerStatistics.css"
export default function CustomerStatistics() {
  return (
    <div className='container-customer-statistics'>
    <div className='headerblue-customer-statistics'>
      <h2 className='customer-statistics-label'>Customer Statistics</h2>
    </div>
    <div className='customer-statistics-data-container'>
      <div className='customer-statistics-data-div-1'>
        <div className='customer-statistics-data-12'>
          <p className='customer-statistics-data-label'>Active Customers</p>
        </div>
        <div className='customer-statistics-data-1'>
          <p className='customer-statistics-data-label'>:</p>
        </div>
        <div className='customer-statistics-data-1'>
          <p className='customer-statistics-data-label-number'
          style={{color: "#3AA45E", fontWeight: 700,fontSize:"15px",lineHeight:"16px",letterSpacing:"0.2px"}}
          > 1544</p>
        </div>
      </div>
      <div className="line"></div>
      <div className='customer-statistics-data-div-2'>
        <div className='customer-statistics-data-12'>
          <p className='customer-statistics-data-label'>Temporarily Disconnected</p>
        </div>
        <div className='customer-statistics-data-2'>
          <p className='customer-statistics-data-label'>:</p>
        </div>
        <div className='customer-statistics-data-2'>
          <p className='customer-statistics-data-label-number'
          style={{color: "#000000", fontWeight: 700,fontSize:"15px",lineHeight:"16px",letterSpacing:"0.2px"}}
          >51</p>
        </div>
      </div>
      <div className="line"></div>
      <div className='customer-statistics-data-div-3'>
        <div className='customer-statistics-data-12'>
          <p className='customer-statistics-data-label'>Permanently Disconnected</p>
        </div>
        <div className='customer-statistics-data-3'>
          <p className='customer-statistics-data-label'>:</p>
        </div>
        <div className='customer-statistics-data-3'>
          <p className='customer-statistics-data-label-number'
          style={{color: "#000000", fontWeight: 700,fontSize:"15px",lineHeight:"16px",letterSpacing:"0.2px"}}
          >11</p>
        </div>
      </div>
      <div className="line"></div>
      <div className='customer-statistics-data-div-4'>
        <div className='customer-statistics-data-12'>
          <p className='customer-statistics-data-label'>Total Number of Customers</p>
        </div>
        <div className='customer-statistics-data-4'>
          <p className='customer-statistics-data-label'>:</p>
        </div>
        <div className='customer-statistics-data-4'>
          <p className='customer-statistics-data-label-number'
          style={{color: "#DC1515", fontWeight: 700,fontSize:"15px",lineHeight:"16px",letterSpacing:"0.2px"}}
          >1606</p>
        </div>
      </div>
    </div>

    </div>
  )
}