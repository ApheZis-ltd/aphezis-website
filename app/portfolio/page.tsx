"use client"

import { projects } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/animations"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="container px-4 md:px-6 relative z-10">
                    <FadeIn>
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                            <Badge variant="secondary" className="mb-4">Our Work</Badge>
                            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                                Featured Projects
                            </h1>
                            <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                                Explore our diverse range of projects and success stories. We build digital experiences that drive growth.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Projects Grid */}
                    <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((proj, idx) => (
                            <StaggerItem key={idx} className="h-full">
                                <HoverScale className="h-full">
                                    <Card className="h-full flex flex-col overflow-hidden border-muted hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg group bg-card/50 backdrop-blur-sm">
                                        <CardHeader className="p-0">
                                            <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden group-hover:bg-primary/5 transition-colors">
                                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                                {proj.image ? (
                                                    <div className={`relative w-full h-full ${["ApheZis Platform", "Actors Rwanda", "DocFlow AI"].includes(proj.title) ? "p-4" : ""}`}>
                                                        <Image
                                                            src={proj.image}
                                                            alt={proj.title}
                                                            fill
                                                            className={`${["ApheZis Platform", "Actors Rwanda", "DocFlow AI"].includes(proj.title) ? "object-contain" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                                                        />
                                                    </div>
                                                ) : (
                                                    <span className="font-bold text-6xl text-primary/20 group-hover:text-primary/40 transition-colors transform group-hover:scale-110 duration-500">
                                                        {proj.avatar}
                                                    </span>
                                                )}
                                                <Badge className="absolute top-4 right-4 z-20" variant={proj.type === "Client" ? "default" : "secondary"}>
                                                    {proj.type}
                                                </Badge>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="flex-1 p-6 space-y-4">
                                            <div>
                                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                                                    {proj.title}
                                                </h3>
                                                <p className="text-sm font-medium text-primary/60 mb-2">{proj.client}</p>
                                                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                                                    {proj.desc}
                                                </p>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="p-6 pt-0 mt-auto">
                                            <Button asChild className="w-full group/btn" variant="outline">
                                                <Link href={proj.link || "#"}>
                                                    Learn More
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </HoverScale>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-muted/30 border-t">
                <div className="container px-4 md:px-6">
                    <FadeIn>
                        <div className="flex flex-col items-center justify-center space-y-8 text-center bg-card border rounded-3xl p-12 shadow-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
                            <div className="space-y-4 relative z-10">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to start your project?</h2>
                                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                                    Let's collaborate to bring your vision to life. Contact us today for a free consultation.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                                <Button size="lg" className="h-12 px-8 text-lg">
                                    Get in Touch
                                </Button>
                                <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
                                    View Services
                                </Button>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}
