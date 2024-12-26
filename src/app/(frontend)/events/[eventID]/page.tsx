import { getEvent } from "@/actions/eventActions";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { convertTo12Hour } from "@/helpers/converter";
import { format } from "date-fns";

export default async function page({
  params,
}: {
  params: Promise<{ eventID: string }>;
}) {
  const eventID = (await params).eventID;

  const event = await getEvent(eventID);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5 text-center">Event Details</h1>
      <Card>
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-2 gap-4">
          <div className="col-span-2">
            <p className="text-sm">Title</p>
            <p className="font-semibold">{event?.title}</p>
          </div>
          <div className="">
            <p className="text-sm">Start</p>
            <p className="font-semibold">
              {format(event?.startDate, "dd/MM/yyyy")} at{" "}
              {convertTo12Hour(event?.startTime)}
            </p>
          </div>
          <div className="">
            <p className="text-sm">End</p>
            <p className="font-semibold">
              {format(event?.endDate, "dd/MM/yyyy")} at{" "}
              {convertTo12Hour(event?.endTime)}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-sm">Location</p>
            <p className="font-semibold">{event?.location}</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm">Description</p>
            <p className="font-semibold">{event?.description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
