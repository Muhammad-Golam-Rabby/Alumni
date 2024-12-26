"use client";

import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { createNotice, updateNotice } from "@/actions/noticeAction";

const formSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(3),
});

export default function NoticeForm({ notice }: { notice?: any }) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: notice?.title || "",
      description: notice?.description || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    let res = null;

    if (notice) {
      res = await updateNotice(notice.id, values);
    } else {
      res = await createNotice(values);
    }

    if (res?.success) {
      if (!notice) {
        form.reset();
      }
      toast({
        title: "Success",
        description: res.msg,
      });
    } else {
      toast({
        title: "Error",
        description: res?.msg,
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notice Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notice Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-40">
            {notice ? "Update" : "Create"} Notice
          </Button>
        </form>
      </Form>
    </div>
  );
}
