import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
            <FadeIn>
                <div className="space-y-6">
                    <h1 className="text-9xl font-extrabold tracking-tighter text-primary/20 select-none">
                        404
                    </h1>
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Page not found
                        </h2>
                        <p className="text-muted-foreground max-w-[500px] mx-auto text-lg">
                            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
                        </p>
                    </div>
                    <div className="pt-6">
                        <Button asChild size="lg" className="gap-2">
                            <Link href="/">
                                <ArrowLeft className="h-4 w-4" />
                                Return Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}
