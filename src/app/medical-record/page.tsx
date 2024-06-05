// src/app/medical-record/page.tsx
"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import axios from "axios";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { MedicalRecord } from "./type"; // Import the MedicalRecord type
// MedicalRecordsPage component

const MedicalRecordsPage = () => {
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sorting, setSorting] = useState<string>("");

  const [medicalRecordIdFilter, setMedicalRecordIdFilter] =
    useState<string>(""); // State untuk filter MedicalRecordId

  useEffect(() => {
    const fetchMedicalRecords = async () => {
      try {
        const res = await axios.get(
          "https://strapi-production-946a.up.railway.app/api/medical-records",
          {
            params: {
              "pagination[page]": currentPage,
              "pagination[pageSize]": 10,
              sort: sorting,
              "filters[Name][$containsi]": medicalRecordIdFilter,
              "filters[Status][$eq]": "Active",
            },
          }
        );

        setMedicalRecords(res.data.data);
        setTotalPages(res.data.meta.pagination.pageCount);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchMedicalRecords();
  }, [currentPage, sorting, medicalRecordIdFilter]); // Tambahkan medicalRecordIdFilter ke dependencies useEffect

  const handleSearch = (term: string) => {
    setMedicalRecordIdFilter(term);
  };

  if (error) {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={medicalRecords}
        setSorting={setSorting}
        setMedicalRecordIdFilter={setMedicalRecordIdFilter} // Tambahkan prop setMedicalRecordIdFilter
      />
      {/* Pagination component */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                onClick={() => setCurrentPage(i + 1)}
                isActive={i + 1 === currentPage}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default MedicalRecordsPage;
