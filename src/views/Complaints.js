import React from 'react'
import '../css/Complaints.css'
import '../css/global.css'
import Header from '../components/header'
export default function Complaints() {

    const Complaints = [
        {
            id: 1,
            name: 'John Doe',
            time : '12:00 PM',
            date : '12/12/2020',
            location : 'Kathmandu',
            status : 'Pending'
        }
    ]
    const headerprops = {
        text: "View Complaints",
        height: "10vh"
    }
    const CompViewList = () => {
        const CompViewDataList = Complaints.map((data) => {
            <div className='complaints-data-div'>
            <table className='complaints-table'>
            <tr>
            <td className='complaints-name'>Yashwanth</td>
            </tr>
            <tr className='comp-line2'>
                <td> Vl939393939</td>
                <td></td>
                <td>12:00PM</td>
                <td className='complaint-date'>22/03/2022</td>
            </tr>
            <tr>
                <td className='Place-complaint'>Janatha Bazar</td>
                <td></td>
                <td></td>
                <td className='complaint-status'>Registered</td>
            </tr>
        </table>
        </div>
        });
        return CompViewDataList;
    }

            



  return (
    <div className='container-complaints'>
        
        <Header {...headerprops}/>
   
        <div className='complaints-data-container'>
            
                {/* <div className='complaints-data'>
                <p className='complaints-data-label'>Yashwanth</p>
                </div>
                <div className='complaints-data'>
                    <p className='complaints-data-label'>ID</p>
                    <p className='complaints-data-label' id='time'>12:00 PM</p>
                    <p className='complaints-data-label'>12/12/2020</p>
                </div>
                <div className='complaints-data'>
                    <p className='complaints-data-label'>Kathmandu</p>
                    <p className='complaints-data-label'>Pending</p>
                    
                </div> */}
                {CompViewList()}
                <CompViewList/>
            
        </div>
    </div>

  )
}
