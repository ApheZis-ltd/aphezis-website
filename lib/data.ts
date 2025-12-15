export interface Project {
    title: string;
    desc: string;
    client: string;
    type: string;
    avatar: string;
    image?: string;
    link: string;
}

export const projects: Project[] = [
    {
        title: "Connectify.rw",
        desc: "A modern automotive listing site with secure business email & domain integration.",
        client: "Connectify",
        type: "Client",
        avatar: "C",
        image: "/plogo/conectify.svg",
        link: "https://connectify.rw"
    },
    {
        title: "Actors Rwanda Organization",
        desc: "Leveraging the power of drama and performing arts to address critical social issues, focusing on mental health awareness and anti-mines campaigns.",
        client: "Actors Rwanda",
        type: "Client",
        avatar: "A",
        image: "/plogo/actors.png",
        link: "https://actors.aphezis.com"
    },
    {
        title: "NeuroLab EEG App",
        desc: "Portable EEG paired with AI-powered analytics for real-time brainwave insights.",
        client: "Internal",
        type: "Team Project",
        avatar: "N",
        image: "/plogo/neurolab.jpeg",
        link: "https://www.neurolab.cc/"
    },
    {
        title: "ApheZis Platform",
        desc: "Internal tool for managing deals, clients, and performance analytics.",
        client: "Internal",
        type: "Team Project",
        avatar: "A",
        image: "/plogo/aphezis.png",
        link: "#"
    },
    {
        title: "Genzura Platform",
        desc: "A cutting-edge Inventory project that aims to revolutionize the way businesses manage inventory and their Teams.",
        client: "Internal",
        type: "Team Project",
        avatar: "G",
        image: "/plogo/genzura.png",
        link: "#"
    },
    {
        title: "DocFlow AI",
        desc: "DocFlow AI extracts financial data from PDFs in seconds – think invoices, receipts, bank statements – and turns it into clean, structured JSON or CSV. No more manual data entry.",
        client: "Internal",
        type: "Product",
        avatar: "D",
        image: "/plogo/docflow.webp",
        link: "https://docflow.aphezis.com/"
    },
]
