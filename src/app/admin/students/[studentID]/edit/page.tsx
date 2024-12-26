import { getStudent } from "@/actions/studentAction";
import StudentForm from "@/components/form/StudentForm";
import GoBackBtn from "@/components/GoBackBtn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Student } from "@/interfaces/StudentInterfaces";

export default async function page({
  params,
}: {
  params: Promise<{ studentID: string }>;
}) {
  const studentID = (await params).studentID;
  const student: any = await getStudent(studentID);

  return (
    <div className="space-y-5">
      <GoBackBtn />
      <Card>
        <CardHeader>
          <CardTitle>Edit Student</CardTitle>
        </CardHeader>
        <CardContent>
          <StudentForm student={student} />
        </CardContent>
      </Card>
    </div>
  );
}
