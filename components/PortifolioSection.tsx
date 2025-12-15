import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import { projects } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function PortfolioSection() {
  const displayedProjects = projects.slice(0, 2)

  return (
    <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A glimpse into our recent work. Explore how we help businesses succeed.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {displayedProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
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
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" size="lg" className="group border-primary/20 hover:border-primary/50 hover:bg-primary/5">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
