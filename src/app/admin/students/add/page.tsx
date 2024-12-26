import StudentForm from "@/components/form/StudentForm";
import GoBackBtn from "@/components/GoBackBtn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function page() {
  return (
    <div className="space-y-5">
      <GoBackBtn />
      <Card>
        <CardHeader>
          <CardTitle>Add Student</CardTitle>
        </CardHeader>
        <CardContent>
          <StudentForm />
        </CardContent>
      </Card>
    </div>
  );
}
