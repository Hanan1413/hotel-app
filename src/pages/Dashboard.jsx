import React from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
      <p>This is dashboard page</p>
    </Row>
  );
}

export default Dashboard;
