"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Appointment } from "./type"; // Import the Appointment type

// Define the columns for the appointments
export const columns: ColumnDef<Appointment>[] = [
  {
    id: "UserName",
    accessorKey: "attributes.UserName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        User Name
      </Button>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "attributes.Email",
    header: "Email",
    enableSorting: true,
  },
  {
    accessorKey: "attributes.Date",
    header: "Date",
    enableSorting: true,
  },
  {
    accessorKey: "attributes.Time",
    header: "Time",
    enableSorting: true,
  },
  {
    accessorKey: "attributes.Note",
    header: "Note",
    enableSorting: true,
  },
  {
    accessorKey: "attributes.Status",
    header: "Status",
    enableSorting: true,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="relative inline-block text-left">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem variant="blue">
              <Link href={`/appointment/${row.original.id}/show`}>
                Show details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem variant="yellow">
              <Link href={`/appointment/edit/${row.original.id}`}>Edit</Link>
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
    enableSorting: false,
  },
];
