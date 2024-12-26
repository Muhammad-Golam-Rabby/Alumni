import { getStudents } from "@/actions/studentAction";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default async function page() {
  const students = await getStudents();

  console.log(students);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between gap-4 items-center">
          <CardTitle>Students</CardTitle>
          <Link href="/admin/students/add">
            <Button>Add Student</Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Table className="w-full">
          <TableCaption>A list of graduated students.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">SR</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Roll</TableHead>
              <TableHead>Passing Year</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell>{student.fullName}</TableCell>
                <TableCell>{student.rollNo}</TableCell>
                <TableCell>{student.passingYear}</TableCell>
                <TableCell className="text-right">
                  <Link href={`/admin/students/${student.id}`}>
                    <Button size="sm">View</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
