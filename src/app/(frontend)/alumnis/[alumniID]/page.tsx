import { getStudent } from "@/actions/studentAction";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function page({
  params,
}: {
  params: Promise<{ alumniID: string }>;
}) {
  const alumniID = (await params).alumniID;

  const student: any = await getStudent(alumniID);

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Student Details</CardTitle>
          </CardHeader>
          <CardContent className="grid lg:grid-cols-2 gap-4">
            <div className="">
              <p className="text-sm">Student Name</p>
              <p className="font-semibold">{student?.fullName}</p>
            </div>
            <div className="">
              <p className="text-sm">Roll No.</p>
              <p className="font-semibold">{student?.rollNo}</p>
            </div>
            <div className="">
              <p className="text-sm">Department</p>
              <p className="font-semibold">{student?.department}</p>
            </div>
            <div className="">
              <p className="text-sm">Batch</p>
              <p className="font-semibold">{student?.batch}</p>
            </div>
            <div className="">
              <p className="text-sm">Address</p>
              <p className="font-semibold">{student?.address}</p>
            </div>
            <div className="">
              <p className="text-sm">Passing Year</p>
              <p className="font-semibold">{student?.passingYear}</p>
            </div>
            <div className="">
              <p className="text-sm">Blood Group</p>
              <p className="font-semibold">{student?.bloodGroup}</p>
            </div>
            <div className="">
              <p className="text-sm">Company</p>
              <p className="font-semibold">{student?.company}</p>
            </div>
            <div className="">
              <p className="text-sm">Designation</p>
              <p className="font-semibold">{student?.companyDesignation}</p>
            </div>
            <div className="">
              <p className="text-sm">Company Location</p>
              <p className="font-semibold">{student?.companyLocation}</p>
            </div>
            <div className="">
              <p className="text-sm">Gender</p>
              <p className="font-semibold">{student?.gender}</p>
            </div>
            <div className="">
              <p className="text-sm">Phone</p>
              <p className="font-semibold">{student?.phone}</p>
            </div>
            <div className="">
              <p className="text-sm">Email</p>
              <p className="font-semibold">{student?.email}</p>
            </div>
            <div className="">
              <p className="text-sm">Linkedin URL</p>
              <p className="font-semibold">{student?.linkedInURL}</p>
            </div>
            <div className="">
              <p className="text-sm">About</p>
              <p className="font-semibold">{student?.about}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Personal Info</CardTitle>
          </CardHeader>
          <CardContent className="grid lg:grid-cols-2 gap-4">
            <div className="">
              <p className="text-sm">Address</p>
              <p className="font-semibold">{student?.address}</p>
            </div>
            <div className="">
              <p className="text-sm">Blood Group</p>
              <p className="font-semibold">{student?.bloodGroup}</p>
            </div>
            <div className="">
              <p className="text-sm">Gender</p>
              <p className="font-semibold">{student?.gender}</p>
            </div>
            <div className="">
              <p className="text-sm">Phone</p>
              <p className="font-semibold">{student?.phone}</p>
            </div>
            <div className="">
              <p className="text-sm">Email</p>
              <p className="font-semibold">{student?.email}</p>
            </div>
            <div className="">
              <p className="text-sm">About</p>
              <p className="font-semibold">{student?.about}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Work Details</CardTitle>
          </CardHeader>
          <CardContent className="grid lg:grid-cols-2 gap-4">
            <div className="">
              <p className="text-sm">Company</p>
              <p className="font-semibold">{student?.company}</p>
            </div>
            <div className="">
              <p className="text-sm">Designation</p>
              <p className="font-semibold">{student?.companyDesignation}</p>
            </div>
            <div className="">
              <p className="text-sm">Company Location</p>
              <p className="font-semibold">{student?.companyLocation}</p>
            </div>
            <div className="">
              <p className="text-sm">Linkedin URL</p>
              <p className="font-semibold">{student?.linkedInURL}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
