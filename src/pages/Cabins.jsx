import React, { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm]= useState(false);


  
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>Filter </p>
    </Row>
    <Row>
      <CabinTable />
    </Row>
    <button onClick={() => setShowForm((show) => !show)}>Add new cabin</button>
    {showForm && <CreateCabinForm/> }
    </>
  );
}

export default Cabins;
