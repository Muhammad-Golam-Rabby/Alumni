"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteStudent } from "@/actions/studentAction";
import { redirect } from "next/navigation";
export default function StudentActionCard({
  studentID,
}: {
  studentID: string;
}) {
  const removeStudent = async (studentID: string) => {
    const { success, msg } = await deleteStudent(studentID);
    if (success) {
      redirect("/admin/students");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid lg:grid-cols-2 gap-4">
        <Link href={`/admin/students/${studentID}/edit`}>
          <Button className="w-full">Edit</Button>
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"destructive"}>Remove</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete
                student and all of its data.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  onClick={() => removeStudent(studentID)}
                  type="button"
                  variant="destructive"
                >
                  Yes! Remove
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
