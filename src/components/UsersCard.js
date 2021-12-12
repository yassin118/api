import React from "react";

const UsersCard = ({ users }) => {
  return (
    <div>
      <div className="card" style={{width: "800px"}}>
        <div className="card-body">
          <h5 className="card-title">{users.name.toUpperCase()}</h5>
          <h6 className="card-title"><span>Username :</span> {users.username}</h6>
          <h6 className="card-title"><span>Email address :</span> {users.email}</h6>
          <p className="card-text">
            <span>street :</span> {users.address.street} <br />
            <span>city :</span> {users.address.city} <br />
            <span>zipcode :</span> {users.address.zipcode} <br />
            <span>Phone: </span> {users.phone} <br />
            <span>company :</span> {users.company.name} 
          </p>
          <a href={users.website} className="btn btn-success">
            {users.website}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UsersCard;