import { getNotice } from "@/actions/noticeAction";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function page({
  params,
}: {
  params: Promise<{ noticeID: string }>;
}) {
  const notceID = (await params).noticeID;

  const notice = await getNotice(notceID);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5 text-center">Notice Details</h1>
      <Card>
        <CardHeader>
          <CardTitle>{notice?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{notice?.description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
