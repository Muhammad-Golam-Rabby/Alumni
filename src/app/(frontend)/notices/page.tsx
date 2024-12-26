import { getNotices } from "@/actions/noticeAction";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";

export default async function page() {
  const notices = await getNotices();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5 text-center">Notices</h1>
      <div className="grid lg:grid-cols-3 gap-4">
        {notices?.map((notice: any, i: number) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{notice.title}</CardTitle>
                <Badge variant="secondary">{notice.category}</Badge>
              </div>
              <CardDescription className="flex items-center">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {format(notice.createdAt, "dd/MM/yyyy")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{notice.description.substring(0, 100)}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/notices/${notice.id}`}>
                <Button>Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
