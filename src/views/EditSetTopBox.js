import React from 'react';
import Header from '../components/header';
import "../css/EditSetTopBox.css";
export default function EditSetTopBox() {
    const headerprops={
        text : "Edit SetTop Box",
        height : "10vh",

    }
  return (
    
    <div className='edit-settopbox-container'>
      <Header {...headerprops}/>
      <div className='edit-settopbox-form'>
      <div className="edit-customer-form-row">
            <div className="edit-customer-form-label">Customer Name</div>
            <input className="edit-customer-form-input" type="text" placeholder="Enter the Customer " value="Nikith"/>
        </div>
      </div>

    </div>
  )
}
