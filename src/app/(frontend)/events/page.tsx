import { getEvents } from "@/actions/eventActions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function page() {
  const events: any[] = await getEvents();
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-5 text-center">Events</h1>
      <div className="grid lg:grid-cols-3 gap-4">
        {events?.map((event, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{event?.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{event?.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/events/${event?.id}`}>
                <Button>Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
