
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";


export const createColumns = (handleEdit, handleDelete) => [
  {
    accessorKey: "claimantName",
    header: "Claimant Name",
  },
  {
    accessorKey: "templateTitle",
    header: "Template Title",
  },
  {
    accessorKey: "product",
    header: "Product",
  },
  {
    accessorKey: "manage",
    header: "Manage",
    cell: ({ row }) => (
      <div>
        <Button variant="secondary" className="mr-2" onClick={() => handleEdit(row.original)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => handleDelete(row.original)}>
          Delete
        </Button>
      </div>
    ),
  },
];
