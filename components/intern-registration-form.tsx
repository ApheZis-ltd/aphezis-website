"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"

const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    portfolio: z.string().url({
        message: "Please enter a valid URL.",
    }).optional().or(z.literal("")),
    interest: z.string({
        required_error: "Please select an area of interest.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export function InternRegistrationForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            portfolio: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // In a real application, you would send this data to your backend
        console.log(values)
        toast.success("Application submitted successfully! We'll be in touch soon.")
        form.reset()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="+1 (555) 000-0000" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Area of Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your area of interest" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="web-development">Web Development</SelectItem>
                                    <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                                    <SelectItem value="iot-embedded">IoT & Embedded Systems</SelectItem>
                                    <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                                    <SelectItem value="data-science">Data Science</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="portfolio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Portfolio / CV Link (Optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="https://linkedin.com/in/johndoe" {...field} />
                            </FormControl>
                            <FormDescription>
                                Link to your LinkedIn profile, GitHub, or personal portfolio.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cover Letter / Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us why you want to join our internship program..."
                                    className="min-h-[120px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">Submit Application</Button>
            </form>
        </Form>
    )
}
