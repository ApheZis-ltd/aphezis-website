"use client"

import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Code, Cpu, Globe, GraduationCap, Laptop, Rocket, Users } from "lucide-react"

export default function InternsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <SlideIn direction="down">
                            <div className="space-y-2">
                                <Badge variant="secondary" className="mb-4">
                                    Internship Program 2026
                                </Badge>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Launch Your Tech Career
                                </h1>
                                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                                    Join ApheZis for a transformative internship experience. Work on real projects, learn from experts, and build the future of technology.
                                </p>
                            </div>
                        </SlideIn>
                    </div>
                </div>
            </section>

            {/* Program Details Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <FadeIn>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Programs</h2>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                                    Choose the path that aligns with your passion and career goals.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid gap-8 md:grid-cols-3">
                        <StaggerItem>
                            <Card className="h-full border-muted/40 hover:border-primary/50 transition-colors flex flex-col">
                                <CardHeader>
                                    <div className="p-3 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                                        <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <CardTitle className="text-xl">Software Development</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-1 flex flex-col">
                                    <p className="text-muted-foreground">
                                        Dive into modern web and mobile application development. Master technologies like React, Next.js, Flutter, and Node.js.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                                        <li className="flex items-center">
                                            <Globe className="w-4 h-4 mr-2 text-primary" /> Full-stack Web Development
                                        </li>
                                        <li className="flex items-center">
                                            <Laptop className="w-4 h-4 mr-2 text-primary" /> Mobile App Development
                                        </li>
                                        <li className="flex items-center">
                                            <Rocket className="w-4 h-4 mr-2 text-primary" /> API Design & Integration
                                        </li>
                                    </ul>
                                    <a href="#apply" className="block mt-auto">
                                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                            Enroll Now - 30K RWF
                                        </Button>
                                    </a>
                                </CardContent>
                            </Card>
                        </StaggerItem>

                        <StaggerItem>
                            <Card className="h-full border-muted/40 hover:border-primary/50 transition-colors flex flex-col">
                                <CardHeader>
                                    <div className="p-3 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-4">
                                        <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <CardTitle className="text-xl">Embedded Systems & IoT</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-1 flex flex-col">
                                    <p className="text-muted-foreground">
                                        Bridge the gap between hardware and software. Design smart devices and IoT solutions using microcontrollers and sensors.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                                        <li className="flex items-center">
                                            <Cpu className="w-4 h-4 mr-2 text-primary" /> Microcontroller Programming
                                        </li>
                                        <li className="flex items-center">
                                            <Globe className="w-4 h-4 mr-2 text-primary" /> IoT Cloud Integration
                                        </li>
                                        <li className="flex items-center">
                                            <Rocket className="w-4 h-4 mr-2 text-primary" /> PCB Design & Prototyping
                                        </li>
                                    </ul>
                                    <a href="#apply" className="block mt-auto">
                                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                                            Enroll Now - 30K RWF
                                        </Button>
                                    </a>
                                </CardContent>
                            </Card>
                        </StaggerItem>

                        <StaggerItem>
                            <Card className="h-full border-muted/40 hover:border-primary/50 transition-colors flex flex-col">
                                <CardHeader>
                                    <div className="p-3 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                                        <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <CardTitle className="text-xl">Mentorship & Growth</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-1 flex flex-col">
                                    <p className="text-muted-foreground">
                                        Accelerate your career with personalized guidance from industry experts. Gain real-world experience in a collaborative environment.
                                    </p>
                                    <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                                        <li className="flex items-center">
                                            <GraduationCap className="w-4 h-4 mr-2 text-primary" /> 1-on-1 Mentorship
                                        </li>
                                        <li className="flex items-center">
                                            <Users className="w-4 h-4 mr-2 text-primary" /> Code Reviews & Feedback
                                        </li>
                                        <li className="flex items-center">
                                            <Rocket className="w-4 h-4 mr-2 text-primary" /> Career Development Workshops
                                        </li>
                                    </ul>
                                    <a href="#apply" className="block mt-auto">
                                        <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20">
                                            Enquire Now
                                        </Button>
                                    </a>
                                </CardContent>
                            </Card>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            <Separator />

            {/* Registration Form Section */}
            <section id="apply" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                <div className="container px-4 md:px-6 relative z-10">
                    <FadeIn>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <Badge variant="secondary" className="mb-2">Start Your Journey</Badge>
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                    Apply Now
                                </h2>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                                    Take the first step towards your tech career. Fill out the form and we'll get back to you as soon as possible.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start max-w-6xl mx-auto">
                        {/* Left side - Info & Image */}
                        <SlideIn direction="left">
                            <div className="space-y-8">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                        alt="Team collaboration"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <p className="font-semibold text-lg">Join Our Growing Community</p>
                                        <p className="text-sm text-white/80">100+ interns trained successfully</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <Card className="border-muted/40 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                                        <CardContent className="p-4 text-center">
                                            <p className="text-3xl font-bold text-blue-600">3+</p>
                                            <p className="text-sm text-muted-foreground">Months Training</p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-muted/40 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                                        <CardContent className="p-4 text-center">
                                            <p className="text-3xl font-bold text-purple-600">Real</p>
                                            <p className="text-sm text-muted-foreground">Projects</p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-muted/40 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                                        <CardContent className="p-4 text-center">
                                            <p className="text-3xl font-bold text-green-600">1:1</p>
                                            <p className="text-sm text-muted-foreground">Mentorship</p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-muted/40 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                                        <CardContent className="p-4 text-center">
                                            <p className="text-3xl font-bold text-orange-600">100%</p>
                                            <p className="text-sm text-muted-foreground">Hands-on</p>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                                            <GraduationCap className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Learn from Experts</h3>
                                            <p className="text-sm text-muted-foreground">Get guidance from industry professionals with years of experience.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="mt-1 bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                                            <Rocket className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Launch Your Career</h3>
                                            <p className="text-sm text-muted-foreground">Build a portfolio that will impress future employers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideIn>

                        {/* Right side - Form */}
                        <SlideIn direction="right">
                            <Card className="border-muted/40 shadow-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
                                <CardHeader className="space-y-1 pb-4">
                                    <CardTitle className="text-2xl">Internship Application</CardTitle>
                                    <p className="text-sm text-muted-foreground">Fields marked with * are required</p>
                                </CardHeader>
                                <CardContent>
                                    <form
                                        action="https://formsubmit.co/c5dba7a92e584e2190d0ba123e6782e2"
                                        method="POST"
                                        className="space-y-5"
                                    >
                                        {/* FormSubmit configuration */}
                                        <input type="hidden" name="_subject" value="New Internship Application" />
                                        <input type="hidden" name="_captcha" value="false" />
                                        <input type="hidden" name="_template" value="table" />

                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name *</Label>
                                            <Input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                required
                                                className="bg-white dark:bg-zinc-900"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email *</Label>
                                                <Input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="john@example.com"
                                                    required
                                                    className="bg-white dark:bg-zinc-900"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number *</Label>
                                                <Input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="+250 7XX XXX XXX"
                                                    required
                                                    className="bg-white dark:bg-zinc-900"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="school">School</Label>
                                                <Input
                                                    type="text"
                                                    id="school"
                                                    name="school"
                                                    placeholder="University of Rwanda"
                                                    className="bg-white dark:bg-zinc-900"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="level">Level</Label>
                                                <select
                                                    id="level"
                                                    name="level"
                                                    className="flex h-10 w-full rounded-md border border-input bg-white dark:bg-zinc-900 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                                >
                                                    <option value="">Select level</option>
                                                    <option value="Level 4">Level 4</option>
                                                    <option value="Level 5">Level 5</option>
                                                    <option value="Undergraduate">Undergraduate</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="start_date">Desired Starting Date *</Label>
                                            <Input
                                                type="date"
                                                id="start_date"
                                                name="start_date"
                                                required
                                                className="bg-white dark:bg-zinc-900"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="area">Area of Study *</Label>
                                            <select
                                                id="area"
                                                name="area"
                                                required
                                                className="flex h-10 w-full rounded-md border border-input bg-white dark:bg-zinc-900 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                            >
                                                <option value="">Select area of study</option>
                                                <option value="Software Development">Software Development</option>
                                                <option value="Embedded System">Embedded System</option>
                                                <option value="Networking">Networking</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="study_mode">Study Mode *</Label>
                                            <select
                                                id="study_mode"
                                                name="study_mode"
                                                required
                                                className="flex h-10 w-full rounded-md border border-input bg-white dark:bg-zinc-900 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                            >
                                                <option value="">Select mode</option>
                                                <option value="Online">Online</option>
                                                <option value="Offline">Offline</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="question_type">Question Type</Label>
                                            <select
                                                id="question_type"
                                                name="question_type"
                                                className="flex h-10 w-full rounded-md border border-input bg-white dark:bg-zinc-900 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                            >
                                                <option value="">Select question type</option>
                                                <option value="Internship Inquiry">Internship Inquiry</option>
                                                <option value="Program Details">Program Details</option>
                                                <option value="Payment Options">Payment Options</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                                            Submit Application
                                            <Rocket className="ml-2 w-4 h-4" />
                                        </Button>

                                        <p className="text-xs text-center text-muted-foreground">
                                            By submitting, you agree to our{" "}
                                            <a href="/interns/terms" className="text-primary hover:underline">
                                                terms and privacy policy
                                            </a>.
                                        </p>
                                    </form>
                                </CardContent>
                            </Card>
                        </SlideIn>
                    </div>
                </div>
            </section>
        </div>
    )
}
