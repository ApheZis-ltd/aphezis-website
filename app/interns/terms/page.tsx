"use client"

import { FadeIn, SlideIn } from "@/components/animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, FileText, Lock, Mail } from "lucide-react"
import Link from "next/link"

export default function InternshipTermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-16 bg-gradient-to-b from-background to-muted/50">
                <div className="container px-4 md:px-6">
                    <SlideIn direction="down">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <Badge variant="secondary">Legal</Badge>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                Terms & Privacy Policy
                            </h1>
                            <p className="max-w-[700px] text-muted-foreground md:text-lg">
                                ApheZis Internship Program 2026
                            </p>
                            <Link
                                href="/interns"
                                className="inline-flex items-center text-sm text-primary hover:underline"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Internship
                            </Link>
                        </div>
                    </SlideIn>
                </div>
            </section>

            <div className="container px-4 md:px-6 py-12 max-w-4xl mx-auto">
                <div className="space-y-12">
                    {/* Terms & Conditions */}
                    <FadeIn>
                        <Card className="border-muted/40">
                            <CardHeader className="space-y-1">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                        <FileText className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-2xl">Terms & Conditions</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">1. Program Details</h3>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        <li>The internship program duration is 3 months minimum.</li>
                                        <li>Payment must be completed before the program start date.</li>
                                        <li>Refunds are available within 5 business days of enrollment if the program hasn't started.</li>
                                    </ul>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="font-semibold text-lg mb-2">2. Expectations & Commitment</h3>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        <li>Interns are expected to attend all scheduled sessions.</li>
                                        <li>Complete assigned projects and tasks on time.</li>
                                        <li>Maintain professional conduct throughout the program.</li>
                                        <li>Actively participate in code reviews and team collaborations.</li>
                                    </ul>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="font-semibold text-lg mb-2">3. Intellectual Property</h3>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        <li>Projects created during the internship for learning purposes belong to the intern.</li>
                                        <li>Client projects remain the property of ApheZis and respective clients.</li>
                                        <li>Interns must maintain confidentiality of proprietary information.</li>
                                    </ul>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="font-semibold text-lg mb-2">4. No Employment Guarantee</h3>
                                    <p className="text-muted-foreground">
                                        Completing the internship program does not guarantee employment at ApheZis.
                                        However, outstanding interns may be considered for available positions.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </FadeIn>

                    {/* Privacy Policy */}
                    <FadeIn>
                        <Card className="border-muted/40">
                            <CardHeader className="space-y-1">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                                        <Shield className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-2xl">Privacy Policy</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">1. Data We Collect</h3>
                                    <p className="text-muted-foreground mb-2">
                                        When you apply for our internship program, we collect:
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        <li>Full name and contact information (email, phone)</li>
                                        <li>Educational background (school, level)</li>
                                        <li>Area of interest and desired start date</li>
                                    </ul>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="font-semibold text-lg mb-2">2. How We Use Your Data</h3>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        <li>Process and evaluate your internship application</li>
                                        <li>Communicate with you about the program</li>
                                        <li>Send program updates and relevant information</li>
                                        <li>Improve our internship program based on feedback</li>
                                    </ul>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="font-semibold text-lg mb-2">3. Data Security</h3>
                                    <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                        <Lock className="w-5 h-5 text-green-600 mt-0.5" />
                                        <p className="text-muted-foreground">
                                            Your data is stored securely and only accessed by authorized personnel.
                                            We do not sell or share your personal information with third parties
                                            for marketing purposes.
                                        </p>
                                    </div>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="font-semibold text-lg mb-2">4. Data Retention</h3>
                                    <p className="text-muted-foreground">
                                        We retain your application data for up to 2 years for consideration in
                                        future programs. You may request deletion of your data at any time.
                                    </p>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="font-semibold text-lg mb-2">5. Your Rights</h3>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        <li>Request access to your personal data</li>
                                        <li>Request correction of inaccurate data</li>
                                        <li>Request deletion of your data</li>
                                        <li>Withdraw consent at any time</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </FadeIn>

                    {/* Contact */}
                    <FadeIn>
                        <Card className="border-muted/40 bg-muted/30">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                                        <Mail className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Questions or Concerns?</h3>
                                        <p className="text-muted-foreground">
                                            If you have any questions about these terms or our privacy practices,
                                            please contact us at{" "}
                                            <a href="mailto:info@aphezis.com" className="text-primary hover:underline">
                                                info@aphezis.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </FadeIn>

                    <p className="text-center text-sm text-muted-foreground">
                        Last updated: December 2024
                    </p>
                </div>
            </div>
        </div>
    )
}
