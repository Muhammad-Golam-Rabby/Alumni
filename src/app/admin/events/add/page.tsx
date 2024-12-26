import EventForm from "@/components/form/EventForm";
import GoBackBtn from "@/components/GoBackBtn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function page() {
  return (
    <div className="space-y-5">
      <GoBackBtn />
      <Card>
        <CardHeader>
          <CardTitle>Add Event</CardTitle>
        </CardHeader>
        <CardContent>
          <EventForm />
        </CardContent>
      </Card>
    </div>
  );
}
