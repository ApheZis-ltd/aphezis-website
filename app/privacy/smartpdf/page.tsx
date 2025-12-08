"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react"
import { FadeIn, SlideIn, StaggerContainer, StaggerItem, PageTransition } from "@/components/animations"
import { motion } from "framer-motion"

export default function PrivacyPolicyPage() {
    return (
        <PageTransition>
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-700/10 to-background">
                    <div className="container px-4 md:px-6">
                        <SlideIn direction="down">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <motion.div
                                    className="p-4 bg-blue-700/10 rounded-full"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Shield className="h-12 w-12 text-blue-700" />
                                </motion.div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                                    Privacy Policy
                                </h1>
                                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                                    SmartPDF - Your Privacy Matters to Us
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Last updated: December 8, 2025
                                </p>
                            </div>
                        </SlideIn>
                    </div>
                </section>

                {/* Quick Links */}
                <section className="w-full py-8 bg-muted/50">
                    <div className="container px-4 md:px-6">
                        <FadeIn>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="#information-collection" className="text-sm text-blue-700 hover:underline">
                                    Information Collection
                                </a>
                                <span className="text-muted-foreground">•</span>
                                <a href="#data-usage" className="text-sm text-blue-700 hover:underline">
                                    Data Usage
                                </a>
                                <span className="text-muted-foreground">•</span>
                                <a href="#data-security" className="text-sm text-blue-700 hover:underline">
                                    Data Security
                                </a>
                                <span className="text-muted-foreground">•</span>
                                <a href="#your-rights" className="text-sm text-blue-700 hover:underline">
                                    Your Rights
                                </a>
                                <span className="text-muted-foreground">•</span>
                                <a href="#contact" className="text-sm text-blue-700 hover:underline">
                                    Contact Us
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Main Content */}
                <section className="w-full py-12 md:py-16">
                    <div className="container px-4 md:px-6 max-w-4xl">
                        <StaggerContainer className="space-y-8">
                            {/* Introduction */}
                            <StaggerItem>
                                <FadeIn>
                                    <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                                        <CardContent className="p-6 md:p-8">
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-4">
                                                    <FileText className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                                                    <div className="space-y-3">
                                                        <h2 className="text-2xl font-bold">Introduction</h2>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            Welcome to SmartPDF. We are committed to protecting your personal information and your right
                                                            to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                                                            information when you use our PDF processing services.
                                                        </p>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            By using SmartPDF, you agree to the collection and use of information in accordance with this
                                                            policy. If you do not agree with the terms of this Privacy Policy, please do not access the
                                                            application.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            </StaggerItem>

                            {/* Information Collection */}
                            <StaggerItem>
                                <FadeIn>
                                    <Card id="information-collection" className="bg-background/50 backdrop-blur-sm border border-primary/10">
                                        <CardContent className="p-6 md:p-8">
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-4">
                                                    <Database className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                                                    <div className="space-y-3">
                                                        <h2 className="text-2xl font-bold">Information We Collect</h2>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            We collect information that you provide directly to us when using SmartPDF:
                                                        </p>
                                                        <ul className="space-y-2 text-muted-foreground">
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">PDF Documents:</strong> Files you upload for processing, conversion, or editing</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Account Information:</strong> Email address, username, and password (if you create an account)</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our services, including features used and actions taken</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Device Information:</strong> Browser type, operating system, IP address, and device identifiers</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            </StaggerItem>

                            {/* Data Usage */}
                            <StaggerItem>
                                <FadeIn>
                                    <Card id="data-usage" className="bg-background/50 backdrop-blur-sm border border-primary/10">
                                        <CardContent className="p-6 md:p-8">
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-4">
                                                    <Eye className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                                                    <div className="space-y-3">
                                                        <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            We use the information we collect for the following purposes:
                                                        </p>
                                                        <ul className="space-y-2 text-muted-foreground">
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Service Delivery:</strong> To process your PDF files and provide the requested services</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Account Management:</strong> To create and maintain your account, if applicable</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Improvement:</strong> To analyze usage patterns and improve our services</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Communication:</strong> To send you updates, security alerts, and support messages</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Security:</strong> To detect, prevent, and address technical issues and fraudulent activity</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            </StaggerItem>

                            {/* Data Security */}
                            <StaggerItem>
                                <FadeIn>
                                    <Card id="data-security" className="bg-background/50 backdrop-blur-sm border border-primary/10">
                                        <CardContent className="p-6 md:p-8">
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-4">
                                                    <Lock className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                                                    <div className="space-y-3">
                                                        <h2 className="text-2xl font-bold">Data Security</h2>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            We implement appropriate technical and organizational security measures to protect your
                                                            personal information:
                                                        </p>
                                                        <ul className="space-y-2 text-muted-foreground">
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Encryption:</strong> All data is encrypted in transit using SSL/TLS protocols</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">File Storage:</strong> Uploaded files are stored securely and deleted automatically after processing</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Access Control:</strong> Strict access controls ensure only authorized personnel can access your data</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Regular Audits:</strong> We conduct regular security audits and updates to our systems</span>
                                                            </li>
                                                        </ul>
                                                        <div className="bg-blue-700/10 border border-blue-700/20 rounded-md p-4 mt-4">
                                                            <p className="text-sm text-foreground">
                                                                <strong>Important:</strong> While we strive to protect your information, no method of
                                                                transmission over the internet is 100% secure. We cannot guarantee absolute security.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            </StaggerItem>

                            {/* Data Retention */}
                            <StaggerItem>
                                <FadeIn>
                                    <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                                        <CardContent className="p-6 md:p-8">
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-4">
                                                    <Database className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                                                    <div className="space-y-3">
                                                        <h2 className="text-2xl font-bold">Data Retention</h2>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            We retain your information only for as long as necessary to provide our services and fulfill
                                                            the purposes outlined in this Privacy Policy:
                                                        </p>
                                                        <ul className="space-y-2 text-muted-foreground">
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">PDF Files:</strong> Processed files are automatically deleted within 24 hours</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Account Data:</strong> Account information is retained until you request deletion</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Usage Logs:</strong> Analytics data is retained for up to 90 days</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            </StaggerItem>

                            {/* Your Rights */}
                            <StaggerItem>
                                <FadeIn>
                                    <Card id="your-rights" className="bg-background/50 backdrop-blur-sm border border-primary/10">
                                        <CardContent className="p-6 md:p-8">
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-4">
                                                    <UserCheck className="h-6 w-6 text-blue-700 mt-1 flex-shrink-0" />
                                                    <div className="space-y-3">
                                                        <h2 className="text-2xl font-bold">Your Privacy Rights</h2>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            Depending on your location, you may have the following rights regarding your personal data:
                                                        </p>
                                                        <ul className="space-y-2 text-muted-foreground">
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Access:</strong> Request access to your personal information</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete data</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Deletion:</strong> Request deletion of your personal information</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Data Portability:</strong> Request a copy of your data in a portable format</span>
                                                            </li>
                                                            <li className="flex items-start">
                                                                <span className="mr-2 text-blue-700">•</span>
                                                                <span><strong className="text-foreground">Opt-Out:</strong> Opt-out of marketing communications at any time</span>
                                                            </li>
                                                        </ul>
                                                        <p className="text-muted-foreground leading-relaxed mt-4">
                                                            To exercise any of these rights, please contact us using the information provided below.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            </StaggerItem>

                            {/* Third-Party Services */}
                            <StaggerItem>
                                <FadeIn>
                                    <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                                        <CardContent className="p-6 md:p-8">
                                            <div className="space-y-4">
                                                <div className="space-y-3">
                                                    <h2 className="text-2xl font-bold">Third-Party Services</h2>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        SmartPDF may contain links to third-party websites or services. We are not responsible for the
                                                        privacy practices of these third parties. We encourage you to review their privacy policies
                                                        before providing any personal information.
                                                    </p>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        We may use third-party service providers to help us operate our service, such as cloud hosting
                                                        providers and analytics services. These providers have access to your information only to
                                                        perform tasks on our behalf and are obligated not to disclose or use it for other purposes.
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            </StaggerItem>

                            {/* Children's Privacy */}
                            <StaggerItem>
                                <FadeIn>
                                    <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                                        <CardContent className="p-6 md:p-8">
                                            <div className="space-y-4">
                                                <div className="space-y-3">
                                                    <h2 className="text-2xl font-bold">Children's Privacy</h2>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        SmartPDF is not intended for use by children under the age of 13. We do not knowingly collect
                                                        personal information from children under 13. If you are a parent or guardian and believe your
                                                        child has provided us with personal information, please contact us so we can delete such
                                                        information.
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            </StaggerItem>

                            {/* Changes to Privacy Policy */}
                            <StaggerItem>
                                <FadeIn>
                                    <Card className="bg-background/50 backdrop-blur-sm border border-primary/10">
                                        <CardContent className="p-6 md:p-8">
                                            <div className="space-y-4">
                                                <div className="space-y-3">
                                                    <h2 className="text-2xl font-bold">Changes to This Privacy Policy</h2>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        We may update our Privacy Policy from time to time. We will notify you of any changes by
                                                        posting the new Privacy Policy on this page and updating the "Last updated" date at the top.
                                                    </p>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        You are advised to review this Privacy Policy periodically for any changes. Changes to this
                                                        Privacy Policy are effective when they are posted on this page.
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            </StaggerItem>

                            {/* Contact Information */}
                            <StaggerItem>
                                <FadeIn>
                                    <Card id="contact" className="bg-background/50 backdrop-blur-sm border border-blue-700/20 bg-blue-700/5">
                                        <CardContent className="p-6 md:p-8">
                                            <div className="space-y-4">
                                                <div className="space-y-3">
                                                    <h2 className="text-2xl font-bold">Contact Us</h2>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                                                        practices, please contact us:
                                                    </p>
                                                    <div className="space-y-2 mt-4">
                                                        <p className="text-foreground">
                                                            <strong>Email:</strong>{" "}
                                                            <a href="mailto:info@aphezis.com" className="text-blue-700 hover:underline">
                                                                info@aphezis.com
                                                            </a>
                                                        </p>
                                                        <p className="text-foreground">
                                                            <strong>Website:</strong>{" "}
                                                            <Link href="/contact" className="text-blue-700 hover:underline">
                                                                Contact Form
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            </StaggerItem>
                        </StaggerContainer>

                        {/* Back to Home Button */}
                        <div className="mt-12 flex justify-center">
                            <FadeIn delay={0.5}>
                                <Link href="/">
                                    <Button variant="outline" className="group">
                                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                        Back to Home
                                    </Button>
                                </Link>
                            </FadeIn>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
