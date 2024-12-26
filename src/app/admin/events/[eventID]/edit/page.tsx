import { getEvent } from "@/actions/eventActions";
import EventForm from "@/components/form/EventForm";
import GoBackBtn from "@/components/GoBackBtn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function page({
  params,
}: {
  params: Promise<{ eventID: string }>;
}) {
  const eventID = (await params).eventID;

  const event: any = await getEvent(eventID);

  return (
    <div className="space-y-5">
      <GoBackBtn />
      <Card>
        <CardHeader>
          <CardTitle>Edit Event</CardTitle>
        </CardHeader>
        <CardContent>
          <EventForm event={event} />
        </CardContent>
      </Card>
    </div>
  );
}
