import { getNotice } from "@/actions/noticeAction";
import NoticeForm from "@/components/form/NoticeForm";
import GoBackBtn from "@/components/GoBackBtn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function page({
  params,
}: {
  params: Promise<{ noticeID: string }>;
}) {
  const noticeID = (await params).noticeID;

  const notice = await getNotice(noticeID);

  return (
    <div className="space-y-5">
      <GoBackBtn />
      <Card>
        <CardHeader>
          <CardTitle>Edit Notice</CardTitle>
        </CardHeader>
        <CardContent>
          <NoticeForm notice={notice} />
        </CardContent>
      </Card>
    </div>
  );
}
