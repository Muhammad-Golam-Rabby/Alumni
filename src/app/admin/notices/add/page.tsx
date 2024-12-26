import NoticeForm from "@/components/form/NoticeForm";
import GoBackBtn from "@/components/GoBackBtn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function page() {
  return (
    <div className="space-y-5">
      <GoBackBtn />
      <Card>
        <CardHeader>
          <CardTitle>Add Notice</CardTitle>
        </CardHeader>
        <CardContent>
          <NoticeForm />
        </CardContent>
      </Card>
    </div>
  );
}
