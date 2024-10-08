import styled from "styled-components";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import { useSearchParams } from "react-router-dom";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable() {
  const {isLoading, cabins, error} = useCabins();
  const[searchParams] = useSearchParams();



  if (isLoading) return <Spinner />;
  const filterValue = searchParams.get('discount') || "all"
  
  let filterdCabins;
  if(filterValue === 'all') filterdCabins = cabins;
  if(filterValue === 'no-discount') filterdCabins = cabins.filter((cabin) => cabin.discount === 0);
  if(filterValue === 'with-discount') filterdCabins = cabins.filter((cabin) => cabin.discount > 0)

 console.log(filterValue)



  if (error) return <div>Error fetching cabins: {error.message}</div>;


  return (
    <Table >
      <TableHeader >
        <div>Cabin</div>
        <div></div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
      </TableHeader>
      <div>
      {filterdCabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
        </div>
    </Table>
  );
}

export default CabinTable;
