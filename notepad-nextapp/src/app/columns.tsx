"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
export type Notes = {
    id: string
    description: string
    status: "Pending" | "Ongoing" | "Completed" | "Failed"
}

export const columns: ColumnDef<Notes>[] = [
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "status",
        header: "Status",
    }
]