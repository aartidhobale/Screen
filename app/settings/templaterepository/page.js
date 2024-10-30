
"use client";

import { DataTable } from "./data-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createColumns } from "./columns";

export default function TemplateRepositoryPage() {
  const [data, setData] = useState([
    { claimantName: "Aditya Birla Finance Limited", templateTitle: "Sunil Kumar", product: "Pune", manage: "Manage" },
    { claimantName: "Bajaj Housing Ltd.", templateTitle: "Invocation Notice", product: "Car Loan", manage: "Manage" },
    { claimantName: "L&T Finance Holdings Limited", templateTitle: "Arbitration Notice 3", product: "Loan Against Property", manage: "Manage" },
 
  ]);

  const handleEdit = (row) => { 
    console.log("Editing:", row); 
  };

  const handleDelete = (row) => { 
    console.log("Deleting:", row);
    setData(data.filter((item) => item.claimantName !== row.claimantName));
  };

  const columns = createColumns(handleEdit, handleDelete);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Template Repository</h1>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <Button variant="outline">Copy</Button>
          <Button variant="outline">Excel</Button>
          <Button variant="outline">PDF</Button>
          <Button variant="outline">Column Visibility</Button>
        </div>
        <div>
          <Input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg shadow">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
