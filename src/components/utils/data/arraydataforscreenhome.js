import img1 from "../../../assets/slider4.jpg";
import img2 from "../../../assets/homeimg2.webp";

export const homeSlides = [
    {
        id: 1,
        background: img1,

        heading: "Excellence in Every Project",
        subheading: "Delivering Quality Solutions Across Industries",

        steps: ["Analyse", "Plan", "Execute", "Deliver"],

        buttons: [
            { text: "Our Services", link: "/services" },
        ],

        layout: {
            contentAlign: "left",
            buttonsAlign: "start",
        },
    },
    {
        id: 2,
        background: img2,

        heading: "Building Trust Through Innovation",
        subheading: "Engineering, Technology, and Professional Expertise",

        steps: ["Concept", "Design", "Build", "Deliver"],

        buttons: [
            { text: "Explore Projects", link: "/projects" },
            { text: "Contact Us", link: "/contact" },
        ],

        layout: {
            contentAlign: "right",
            buttonsAlign: "end",
        },
    },
    {
        id: 3,
        background: img1,

        heading: "Your Partner in Growth",
        subheading: "Transforming Ideas into Tangible Solutions",

        steps: ["Research", "Strategy","Execution", "Results"],

        buttons: [
            { text: "Learn More", link: "/about" },
        ],

        layout: {
            contentAlign: "center",
            buttonsAlign: "center",
        },
    },
    {
        id: 4,
        background: img2,

        heading: "Innovating for a Better Tomorrow",
        subheading: "Delivering Cutting-Edge Technology and Services",

        steps: ["Plan", "Develop", "Optimize", "Succeed"],

        buttons: [
            { text: "Our Expertise", link: "/services" },
            { text: "Get In Touch", link: "/contact" },
        ],

        layout: {
            contentAlign: "left",
            buttonsAlign: "start",
        },
    },
];
