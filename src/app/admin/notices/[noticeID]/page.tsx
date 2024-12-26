import { getNotice } from "@/actions/noticeAction";
import NoticeActionCard from "@/components/actionCards/NoticeActionCard";
import GoBackBtn from "@/components/GoBackBtn";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
      <p className="font-semibold">Notice Details</p>
      <Card>
        <CardHeader>
          <CardTitle>{notice?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{notice?.description}</p>
        </CardContent>
      </Card>
      <NoticeActionCard noticeID={noticeID} />
    </div>
  );
}
