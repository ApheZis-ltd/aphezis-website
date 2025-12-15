"use client"

import { useState } from "react"
import { products } from "@/lib/shop-data"
import { ProductCard } from "@/components/shop/product-card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    const categories = ["All", "IoT Components", "Embedded Systems", "Sensors", "Accessories"]

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(product => product.category === selectedCategory)

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-muted/30">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="container px-4 md:px-6 relative z-10 text-center">
                    <FadeIn>
                        <Badge variant="secondary" className="mb-4">ApheZis Shop</Badge>
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                            Hardware Solutions
                        </h1>
                        <p className="max-w-[700px] mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                            Discover high-quality IoT components, embedded systems, and tools for your next innovation.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Shop Section */}
            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6">
                    {/* Category Filter */}
                    <FadeIn>
                        <div className="flex flex-wrap justify-center gap-2 mb-12">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? "default" : "outline"}
                                    onClick={() => setSelectedCategory(category)}
                                    className="rounded-full"
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Product Grid */}
                    <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProducts.map((product) => (
                            <StaggerItem key={product.id} className="h-full">
                                <ProductCard product={product} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20 text-muted-foreground">
                            No products found in this category.
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
