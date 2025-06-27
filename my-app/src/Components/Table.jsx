import { useState } from "react";
import { TableHeader } from "./HelperComponets";
import { TableRow } from "./HelperComponets";

export default function TableWrapper() {
  const [rows, setRows] = useState([1, 2, 3, 4]); 

  const handleDelete = (idToRemove) => {
    setRows(prev => prev.filter(id => id !== idToRemove));
  };

  return (
    <div
      style={{
        borderRadius: "5px",
        overflow: "hidden",
        border: "1px solid #DBE0EB",
        width: "100%",
      }}
    >
      <TableHeader />
      {rows.map((id, idx) => (
        <TableRow
          key={id}
          rowId={id}
          onDelete={handleDelete}
          noBorder={idx === rows.length - 1}
        />
      ))}
    </div>
  );
}