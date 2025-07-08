"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton, } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

// ✅ Schema updated (removed service and description)
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  mobile: z.object({
    code: z.string(),
    number: z.string().regex(/^\d{10}$/, { message: "Enter a valid 10-digit mobile number." }),
  }),
  email: z.string().email({ message: "Enter a valid email address." }),
  organization: z.string().min(2, { message: "Organization name must be at least 2 characters." }),
});


export default function EnquiryForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
  name: "",
  mobile: {
    code: "in",
    number: "",
  },
  email: "",
  organization: "",
},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 transparent border rounded-2xl shadow-md p-8 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">Submit Your Enquiry</h2>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
  control={form.control}
  name="mobile"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Mobile Number</FormLabel>
      <FormControl>
        <div className="flex space-x-2">
          <Select
            value={field.value?.code}
            onValueChange={(value) => field.onChange({ ...field.value, code: value })}
          >
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ae">🇦🇪 +971</SelectItem>
              <SelectItem value="in">🇮🇳 +91</SelectItem>
              <SelectItem value="us">🇺🇸 +1</SelectItem>
              <SelectItem value="ca">🇨🇦 +1</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="10-digit mobile number"
            value={field.value?.number || ""}
            onChange={(e) => field.onChange({ ...field.value, number: e.target.value })}
            className="flex-1 transition-all duration-300 focus:scale-105"
          />
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization</FormLabel>
              <FormControl>
                <Input placeholder="Your company name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full text-base py-6">
          Submit Enquiry
        </Button>
      </form>
    </Form>
  );
}
