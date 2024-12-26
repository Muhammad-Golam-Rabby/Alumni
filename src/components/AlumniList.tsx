"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

export default function AlumniList({ students }: { students: any[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState("all");

  const filteredAlumni = students.filter((alum) => {
    const matchesSearch =
      alum.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alum.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alum.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear =
      filterYear === "all" || alum.passingYear.toString() === filterYear;
    return matchesSearch && matchesYear;
  });

  const graduationYears = [
    ...new Set(students.map((alum) => alum.passingYear)),
  ].sort((a, b) => b - a);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          type="text"
          placeholder="Search by name, major, or company"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={filterYear} onValueChange={setFilterYear}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {graduationYears.map((year) => (
              <SelectItem key={year} value={year.toString() || ""}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlumni.map((alum) => (
          <Card
            key={alum.id}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {alum.fullName}
              </CardTitle>
              <p className="text-sm text-gray-500">
                Class of {alum.passingYear}
              </p>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                Batch {alum.batch} - {alum.department}
              </p>
              <p className="mb-4">
                {alum.companyDesignation} at {alum.company}
              </p>
              <Link href={`/alumnis/${alum.id}`}>
                <Button> View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      {filteredAlumni.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No alumni found matching your search criteria.
        </p>
      )}
    </div>
  );
}
