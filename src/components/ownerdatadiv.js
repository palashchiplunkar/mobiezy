const OwnerData = ({ ownerid, owneramt, ownername }) => {
    return (
      <div className="report-data-div">
        <div className="report-data-owner">
          <p className="report-data-owner-id">{ownerid}</p>
          <p className="report-data-owner-amt">{owneramt}</p>
        </div>
        <p className="report-data-owner-name">{ownername}</p>
      </div>
    );
  };
export default OwnerData;