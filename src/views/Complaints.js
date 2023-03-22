import React from 'react';
import '../css/Complaints.css';
import '../css/global.css';
import Header from '../components/header';

export default function Complaints() {
  const Complaints = [
    {
      id: "V1954645",
      name: 'John Doe',
      time: '12:00 PM',
      date: '12/12/2020',
      location: 'Kathmandu',
      status: 'Pending'
    }
  ];

  const headerprops = {
    text: 'View Complaints',
    height: '10vh'
  };

  const CompViewList = ({ complaints }) => {
    const CompViewDataList = complaints.map((data) => (
        <div className='complaints-data-div'>
        <table className='complaints-table'>
        <tr>
        <td className='complaints-name'>{data.name}</td>
        </tr>
        <tr className='comp-line2'>
            <td> {data.id}</td>
            <td></td>
            <td>{data.time}</td>
            <td className='complaint-date'>{data.date}</td>
        </tr>
        <tr>
            <td className='Place-complaint'>{data.location}</td>
            <td></td>
            <td></td>
            <td className='complaint-status'>{data.status}</td>
        </tr>
    </table>
    </div>
    ));

    return <>{CompViewDataList}</>;
  };

  return (
    <div className="container-complaints">
      <Header {...headerprops} />
      <div className="complaints-data-container">
        <CompViewList complaints={Complaints} />
      </div>
    </div>
  );
}
