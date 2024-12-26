"use client";

import { deleteNotice } from "@/actions/noticeAction";
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
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
export default function NoticeActionCard({ noticeID }: { noticeID: string }) {
  const removeNotice = async (noticeID: string) => {
    const { success, msg } = await deleteNotice(noticeID);
    if (success) {
      redirect("/admin/notices");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid lg:grid-cols-2 gap-4">
        <Link href={`/admin/notices/${noticeID}/edit`}>
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
                notice and all of its data.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  onClick={() => removeNotice(noticeID)}
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
