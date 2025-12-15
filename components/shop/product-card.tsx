"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { Product } from "@/lib/shop-data"
import { motion } from "framer-motion"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="h-full"
        >
            <Card className="h-full flex flex-col overflow-hidden group">
                <CardHeader className="p-0">
                    <div className="relative h-48 w-full bg-muted flex items-center justify-center overflow-hidden">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {!product.inStock && (
                            <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                                <Badge variant="destructive" className="text-lg">Out of Stock</Badge>
                            </div>
                        )}
                        <div className="absolute top-2 right-2">
                            <Badge variant="secondary">{product.category}</Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex-1 p-4 space-y-2">
                    <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">
                        {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                    </p>
                    <div className="pt-2">
                        <span className="text-xl font-bold text-primary">
                            {product.price.toLocaleString()} RWF
                        </span>
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 mt-auto">
                    <Button className="w-full gap-2" disabled={!product.inStock}>
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
