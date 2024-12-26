"use client";

import { deleteEvent } from "@/actions/eventActions";
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
export default function EventActionCard({ eventID }: { eventID: string }) {
  const removeEvent = async (eventID: string) => {
    const { success, msg } = await deleteEvent(eventID);
    if (success) {
      redirect("/admin/events");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid lg:grid-cols-2 gap-4">
        <Link href={`/admin/events/${eventID}/edit`}>
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
                This action cannot be undone. This will permanently delete event
                and all of its data.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  onClick={() => removeEvent(eventID)}
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
