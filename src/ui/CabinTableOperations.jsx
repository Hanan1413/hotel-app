import React from "react";
import TableOperations from "./TableOperations";
import Filter from "./Filter";

const CabinTableOperations = () => {
  return (
    <div>
      <TableOperations>
        <Filter filterField="discount" 
         options={[
          {value: 'all', label: 'All'}, 
         {value: 'no-discount', label: 'No discount'},
         {value: 'with-discount', label: 'with-discount'},

          ]}/>
      </TableOperations>
    </div>
  );
};

export default CabinTableOperations;
