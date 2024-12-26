import { getStudents } from "@/actions/studentAction";
import AlumniList from "@/components/AlumniList";

export default async function page() {
  const students = await getStudents();

  return (
    <div className="">
      <AlumniList students={students} />
    </div>
  );
}
