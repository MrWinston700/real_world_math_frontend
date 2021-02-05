import React from "react";

const Dashboard = props => {
  return (
    <div id="dashboard">
        <h2>Dashboard</h2>
        <h3>Status: {props.loggedInStatus}</h3>
        <h3>User: {props.user}</h3>
    </div>
  );
};

export default Dashboard;
