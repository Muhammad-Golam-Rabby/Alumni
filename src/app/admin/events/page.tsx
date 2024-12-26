import { getEvents } from "@/actions/eventActions";
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
import { convertTo12Hour } from "@/helpers/converter";
import { format } from "date-fns";
import Link from "next/link";

export default async function page() {
  const events: any[] = await getEvents();

  console.log(events);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between gap-4 items-center">
          <CardTitle>Events</CardTitle>
          <Link href="/admin/events/add">
            <Button>Add Event</Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Table className="w-full">
          <TableCaption>A list of events.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">SR</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events?.map((event, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell>{event?.title}</TableCell>
                <TableCell>
                  {event?.startDate && format(event?.startDate, "dd-MM-yyyy")}
                </TableCell>
                <TableCell>
                  {event?.startTime && convertTo12Hour(event?.startTime)}
                </TableCell>
                <TableCell className="text-right">
                  <Link href={`/admin/events/${event?.id}`}>
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
