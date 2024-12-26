import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Users, Calendar, Newspaper } from "lucide-react";
import FrontLayout from "@/components/layouts/FrontLayout";

export default function page() {
  return (
    <FrontLayout>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to the Alumni Portal
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="mr-2" />
                      Alumni Directory
                    </CardTitle>
                    <CardDescription>
                      Connect with fellow graduates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Explore profiles of alumni from various years and fields.
                    </p>
                    <Button asChild>
                      <Link href="/alumnis">View Directory</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2" />
                      Upcoming Events
                    </CardTitle>
                    <CardDescription>
                      Stay involved with your alma mater
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Check out and register for upcoming alumni events.
                    </p>
                    <Button asChild>
                      <Link href="/events">View Events</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Newspaper className="mr-2" />
                      Notices
                    </CardTitle>
                    <CardDescription>
                      Stay informed about university happenings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Read the latest notices from your university.
                    </p>
                    <Button asChild>
                      <Link href="/news">Read News</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </FrontLayout>
  );
}
