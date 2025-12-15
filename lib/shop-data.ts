export interface Product {
    id: string
    title: string
    description: string
    price: number
    category: "IoT Components" | "Embedded Systems" | "Sensors" | "Accessories"
    image: string
    inStock: boolean
}

export const products: Product[] = [
    {
        id: "1",
        title: "ESP32 Development Board",
        description: "Powerful Wi-Fi + Bluetooth LE MCU module, perfect for IoT projects.",
        price: 8500,
        category: "IoT Components",
        image: "/placeholder.jpg",
        inStock: true,
    },
    {
        id: "2",
        title: "Arduino Uno R3",
        description: "The classic microcontroller board for beginners and pros alike.",
        price: 12000,
        category: "Embedded Systems",
        image: "/placeholder.jpg",
        inStock: true,
    },
    {
        id: "3",
        title: "Raspberry Pi 4 Model B (4GB)",
        description: "A complete desktop computer, credit-card sized. Perfect for media centers and servers.",
        price: 85000,
        category: "Embedded Systems",
        image: "/placeholder.jpg",
        inStock: true,
    },
    {
        id: "4",
        title: "DHT22 Temperature & Humidity Sensor",
        description: "High precision digital sensor for measuring temperature and humidity.",
        price: 4500,
        category: "Sensors",
        image: "/placeholder.jpg",
        inStock: true,
    },
    {
        id: "5",
        title: "Ultrasonic Sensor HC-SR04",
        description: "Distance measuring module, great for robotics and obstacle avoidance.",
        price: 2500,
        category: "Sensors",
        image: "/placeholder.jpg",
        inStock: true,
    },
    {
        id: "6",
        title: "Jumper Wires (Male-to-Male)",
        description: "Pack of 40 jumper wires for breadboarding and prototyping.",
        price: 1500,
        category: "Accessories",
        image: "/placeholder.jpg",
        inStock: true,
    },
    {
        id: "7",
        title: "Breadboard (830 Point)",
        description: "Solderless breadboard for testing and prototyping circuits.",
        price: 3500,
        category: "Accessories",
        image: "/placeholder.jpg",
        inStock: true,
    },
    {
        id: "8",
        title: "Relay Module (4-Channel)",
        description: "Control high voltage devices with your microcontroller.",
        price: 6000,
        category: "IoT Components",
        image: "/placeholder.jpg",
        inStock: true,
    },
]
