"use client";

import { MoveLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function GoBackBtn() {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} variant="ghost">
      <MoveLeftIcon />
      Go Back
    </Button>
  );
}
