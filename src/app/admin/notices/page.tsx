import { getNotices } from "@/actions/noticeAction";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default async function page() {
  const notices: any = await getNotices();

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between gap-4 items-center">
          <CardTitle>Notices</CardTitle>
          <Link href="/admin/notices/add">
            <Button>Add Notice</Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Table className="w-full">
          <TableCaption>A list of notices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">SR</TableHead>
              <TableHead>title</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notices.map((notice: any, i: number) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell>{notice?.title}</TableCell>
                <TableCell className="text-right">
                  <Link href={`/admin/notices/${notice.id}`}>
                    <Button size="sm">View</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
