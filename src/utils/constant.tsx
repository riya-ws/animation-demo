import workSection from "../assets/work.png";
import {
  Cass,
  Cgv,
  CjIcon,
  Doum,
  Elevend,
  Fish,
  Hmall,
  Jtbc,
  Kasa,
  TextRiverIcon,
} from "../locals/icon";
import nightView from "../assets/night-view.jpeg";
import nature from "../assets/nature.jpeg";
import forest from "../assets/forest.jpeg";
import snow from "../assets/snow.jpeg";
import homeIntegration from "../assets/data-integration/41-ana-home.webp";
import youtubeIntegration from "../assets/data-integration/17-yt-home.webp";
import kocHomeIntegration from "../assets/data-integration/18-koc-home.webp";
import pendoHomeIntegration from "../assets/data-integration/19-pendo-home.webp";
import breontoIntegration from "../assets/data-integration/23-bronto-home.webp";
import salesForceIntegration from "../assets/data-integration/33-salesforce-home.webp";
import pipeHomeIntegration from "../assets/data-integration/34-pipe-home.webp";
import tigerHomeIntegration from "../assets/data-integration/45-tiger-home.webp";
import readHomeIntegration from "../assets/data-integration/46-red-home.webp";
import sfHomeIntegration from "../assets/data-integration/54-sf-home.webp";
import vertHomeIntegration from "../assets/data-integration/55-vert-home.webp";
import fireHomeIntegration from "../assets/data-integration/56-fire-home.webp";
import arnHomeIntegration from "../assets/data-integration/58-arm-home.webp";
import mariaHomeIntegration from "../assets/data-integration/59-maria-home.webp";
import klavHomeIntegration from "../assets/data-integration/36-klav-home.png";
import zenHomeIntegration from "../assets/data-integration/37-zen-home.png";
import yotpoHomeIntegration from "../assets/data-integration/20-yotpo-home.webp";
import sprinkHomeIntegration from "../assets/data-integration/21-sprinklr-home.webp";
import mixHomeIntegration from "../assets/data-integration/24-mix-home.webp";
import rdsPostHomeIntegration from "../assets/data-integration/60-rds-post-home.webp";
import faceHomeIntegration from "../assets/data-integration/26-face-home.webp";

export const SliderDemoData = [
  {
    title: "Demo 1",
    description: "Arrow card stack swipe",
    path: "/arrow-card-stack-swipe",
  },
  {
    title: "Demo 2",
    description: "On scroll sticky card stack",
    path: "/on-scroll-sticky-card-stack",
  },
  {
    title: "Demo 3",
    description: " Sticky scroll reveal",
    path: "/sticky-scroll-reveal",
  },
  {
    title: "Demo 4",
    description: "Infinite scrolling,dragging and snapping card",
    path: "/infinite-scrolling-card",
  },
  {
    title: "Demo 5",
    description: "Infinite logo slider ",
    path: "/infinite-logo-slider",
  },
  {
    title: "Demo 6",
    description: "Carousals with scroll driven animation",
    path: "/scroll-driven",
  },
  {
    title: "Demo 7",
    description: "Expanding flex card",
    path: "/flex-card",
  },
  {
    title: "Demo 8",
    description: "Drag cards to scroll, click on a card to rotate it",
    path: "/card-rotation",
  },
  {
    title: "Demo 9",
    description: "spot agency what we are doing section",
    path: "/spot-agency-doing",
  },
  {
    title: "Demo 10",
    description: "Painless data integration section",
    path: "/painless-data-integration",
  },
  {
    title: "Demo 11",
    description: "Made by data pros for data pros",
    path: "/rivery",
  },
];
export const WorkData = [
  {
    title: "Create Your Account",
    description:
      "Sign up in minutes and start your journey to smarter financial management with Fintro.",
    image: workSection,
  },
  {
    title: "Link Your Bank Accounts",
    description:
      "Securely connect all your bank accounts and credit cards for a complete financial overview.",
    image: workSection,
  },
  {
    title: "Begin Tracking Your Spending",
    description:
      "Automatically track your expenses and stay on top of your finances effortlessly.",
    image: workSection,
  },
  {
    title: "Analyse Your Spends",
    description:
      "Create custom budgets, monitor spending, and get alerts when limits are near.",
    image: workSection,
  },
  {
    title: "Explore with Smart Search",
    description:
      "Quickly find any transaction or insight with Fintro’s AI-powered smart search.",
    image: workSection,
  },
];
export const TempTestimonials = [
  {
    id: 1,
    name: "Melina",
    desc: "Greek tutor",
    comment:
      "Melina is an excellent teacher. I’ve wanted to improve my Greek for a long time however I’ve always been a little scared to take the plunge, however Melina instantly put me at ease. I believe that I will learn a lot from her, which",
    rating: "Kshi",
    style: null,
    bgColor: "#FFE192",
  },
  {
    id: 2,
    name: "Greta",
    desc: "Violin tutor",
    comment:
      "I was really impressed with Greta's approach. She knows what needs to be achieved, but the 'how' is tailored to my own current strengths, weaknesses, and goals. She's also really encouraging and pays attention to detail which I",
    rating: "Gerasimos",
    style: null,
    bgColor: "#D7F1DF",
  },
  {
    id: 3,
    name: "Alex",
    desc: "Singing teacher",
    comment:
      "Alex is gifted, creative, and fun, and messaged me withe several exercises to continue with, which were greatly appreciated. High energy and encouraging.",
    rating: "Bonnie",
    style: null,
    bgColor: "#FFE192",
  },
  {
    id: 4,
    name: "Rula",
    desc: "Greek tutor",
    comment:
      "It’s been great taking sessions with Rula. She is helpful, professional and really enjoy my lessons with her. Highly recommend!",
    rating: "Laura",
    style: null,
    bgColor: "#D7F1DF",
  },
  {
    id: 5,
    name: "Agnes",
    desc: "Maths tutor",
    comment:
      "Agnes is well organised & explains maths concepts in a clear concise manner. Overall an excellent tutor.",
    rating: "Bonnie",
    style: null,
    bgColor: "#FFE192",
  },
];
export const stickyRevealData = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: "Collaborative Editing",
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    // content: (
    //   <div className="h-full w-full  flex items-center justify-center text-white">
    //     {/* <Image
    //         src="/linear.webp"
    //         width={300}
    //         height={300}
    //         className="h-full w-full object-cover"
    //         alt="linear board demo"
    //       /> */}
    //   </div>
    // ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: "Version control",
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: "Running out of content",
  },
];
export const InfiniteLogoData = [
  {
    icon: <Kasa />,
  },
  {
    icon: <Fish />,
  },
  {
    icon: <Cgv />,
  },
  {
    icon: <Jtbc />,
  },
  {
    icon: <Doum />,
  },
  {
    icon: <Cass />,
  },
  {
    icon: <Hmall />,
  },
  {
    icon: <CjIcon />,
  },
  {
    icon: <Elevend />,
  },
];
export const FlexCardData = [
  {
    img: nightView,
    iconClass: "fa-solid fa-person-walking",
    title: "Las Vegas",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    img: nature,
    iconClass: "fa-solid fa-snowflake",
    title: "Switzerland",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    img: forest,
    iconClass: "fa-solid fa-tree",
    title: "Amazon Rainforest",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    img: snow,
    iconClass: "fa-solid fa-droplet",
    title: "Siberia",
    description: "Lorem ipsum dolor sit amet.",
  },
];
export const RotationCards = [
  {
    id: 1,
    icon: (
      <div className="h-10 w-10 text-4xl text-sky-500 stroke-[3px]">
        <Fish />
      </div>
    ),
  },
  {
    id: 2,
    icon: (
      <div className="h-10 w-10 text-4xl text-sky-500 stroke-[3px]">
        <Fish />
      </div>
    ),
  },
  {
    id: 3,
    icon: (
      <div className="h-10 w-10 text-4xl text-sky-500 ">
        <Fish />
      </div>
    ),
  },
  {
    id: 4,
    icon: (
      <div className="h-10 w-10 text-4xl text-sky-500">
        <Fish />
      </div>
    ),
  },
  {
    id: 5,
    icon: (
      <div className="h-10 w-10 text-4xl text-sky-500 ">
        <Fish />
      </div>
    ),
  },
];
export const AgencyDoingData = [
  {
    title: " Digital design",
    description:
      "Product research, design and development of digital products of companies and services. We believe that design is a storytelling exercise that carries both logic and aesthetics. That's why we are forever balancing and doing it with gusto.",
    bgColor: "#caff33",
    button: [
      {
        text: "Websites",
      },
      {
        text: "CRM",
      },
      {
        text: "Dashboards",
      },
      {
        text: "Online stores",
      },
      {
        text: "Prototyping",
      },
      {
        text: "Castdev",
      },
      {
        text: "Web and mobile applications",
      },
      {
        text: "Benchmarking",
      },
      {
        text: "Business research",
      },
      {
        text: " b2b design",
      },
    ],
  },
  {
    title: "Branding and printing",
    description:
      "Our goal is to increase the impact and recognition of your brand. Exclusive logos, brand identities and layouts will emphasise the uniqueness and value of your brand.",
    bgColor: "#ff621f",
    button: [
      {
        text: "Naming",
      },
      {
        text: "Identity",
      },
      {
        text: "Brandbook",
      },
      {
        text: "Creative strategies",
      },
      {
        text: "Social media",
      },
      {
        text: "Merch",
      },
      {
        text: "Communication design",
      },
      {
        text: "Collaborations",
      },
      {
        text: "Package",
      },
      {
        text: "Art supervision",
      },
    ],
  },
  {
    title: "Consulting",
    description:
      "Consultancy, design audits and advice tailored to your request to help your team or business. That's why we are forever balancing and doing it with gusto.",
    bgColor: "#bba9ff",
    button: [
      {
        text: "Creative strategies",
      },
      {
        text: "Collaboration ideas",
      },
      {
        text: "Website design audit",
      },
      {
        text: "Interface design audit",
      },
      {
        text: "Corporate identity audit",
      },
      {
        text: "Brand consultancy",
      },
      {
        text: "Design sprints",
      },
      {
        text: "Product support",
      },
      {
        text: "Start-up assistance",
      },
    ],
  },
  {
    title: "Design outsourcing",
    description:
      "We are developing this service with heart ... Coming soon Design outsourcing is a cool way to speed up the design and development process for your business or part of a product, when you may be short on resource but have a big desire to launch quicker... ",
    bgColor: "#ffffff",
    button: [
      {
        text: "Websites",
      },
      {
        text: "CRM",
      },
      {
        text: "Dashboards",
      },
      {
        text: "Online stores",
      },
      {
        text: "Prototyping",
      },
      {
        text: "Castdev",
      },
      {
        text: "Web and mobile applications",
      },
      {
        text: "Benchmarking",
      },
      {
        text: "Business research",
      },
      {
        text: " b2b design",
      },
    ],
  },
];
export const DataIntegrationData = [
  {
    image: homeIntegration,
    category: "Database",
  },
  {
    image: youtubeIntegration,
    category: "Database",
  },
  {
    image: kocHomeIntegration,
    category: "Database",
  },
  {
    image: pendoHomeIntegration,
    category: "Database",
  },
  {
    image: breontoIntegration,
    category: "Database",
  },
  {
    image: salesForceIntegration,
    category: "Marketing",
  },
  {
    image: pipeHomeIntegration,
    category: "Marketing",
  },

  {
    image: tigerHomeIntegration,
    category: "Marketing",
  },
  {
    image: readHomeIntegration,
    category: "Marketing",
  },
  {
    image: sfHomeIntegration,
    category: "Marketing",
  },
  {
    image: vertHomeIntegration,
    category: "Marketing",
  },
  {
    image: fireHomeIntegration,
    category: "Marketing",
  },
  {
    image: arnHomeIntegration,
    category: "CRM",
  },
  {
    image: mariaHomeIntegration,
    category: "CRM",
  },
  {
    image: rdsPostHomeIntegration,
    category: "CRM",
  },
  {
    image: homeIntegration,
    category: "CRM",
  },
  {
    image: youtubeIntegration,
    category: "CRM",
  },
  {
    image: kocHomeIntegration,
    category: "CRM",
  },
  {
    image: klavHomeIntegration,
    category: "CRM",
  },
  {
    image: breontoIntegration,
    category: "Analytics",
  },
  {
    image: zenHomeIntegration,
    category: "Analytics",
  },
  {
    image: pipeHomeIntegration,
    category: "Analytics",
  },
  {
    image: yotpoHomeIntegration,
    category: "Analytics",
  },
  {
    image: sprinkHomeIntegration,
    category: "Analytics",
  },
  {
    image: mixHomeIntegration,
    category: "Analytics",
  },
  {
    image: faceHomeIntegration,
    category: "Analytics",
  },
];
export const RiveryCardsData = [
  {
    id: 1,
    title: "Data Leaders",
    person: "Ranajay Nandy",
    bgColor: "bg-[#32046d]",
    position: "Leaders",
    extraSubDescription: (
      <div className={`p-4 rounded-3xl flex gap-4 bg-[#ffd300]`}>
        <TextRiverIcon width={46} height={46} />
        <p className="text-base font-medium">
          Rivery’s{" "}
          <span className="text-[#6234f7]">out-of-the-box starter kits</span>{" "}
          are amazing. They helped us build our initial data pipelines really
          fast and meet our objectives right out of the gate.
        </p>
      </div>
    ),
    leaders: [
      {
        para: "Cut hours of dev, maintenance, and upkeep with automated and pre-built solutions.",
        description:
          "Gain total control over your spend with full visibility into your team’s consumption – based on value, not rows.",
        subDescription:
          "Govern with RBAC. Align your ETL tool with the same seamless experience you expect from your cloud data warehouse.",
      },
    ],
  },
  {
    id: 2,
    title: "Data Engineers",
    person: "Romilly Hills",
    bgColor: "bg-[#6234f7]",
    position: "Leaders",
    extraSubDescription: (
      <div className={`p-4 rounded-3xl flex gap-4 bg-[#32046d]`}>
        <TextRiverIcon width={46} height={46} />
        <p className="text-base font-medium text-white">
          Before Rivery, it took us
          <span className="text-[#ffd300]"> 2 weeks </span>
          to build a new connector. Now, we can do it in{" "}
          <span className="text-[#ffd300]">half a day</span>
        </p>
      </div>
    ),
    leaders: [
      {
        para: "Action proactively with full monitoring control. Easily manage deployments across multiple environments and versions.",
        description:
          "Remotely execute, edit, deploy, and manage data pipelines with API and CLI that integrate with your architecture.",
        subDescription:
          "Run Python and use DataFrames within your data flow. No extra code. No extra infrastructure.",
      },
    ],
  },
  {
    id: 3,
    title: "Data Analysts",
    person: "David Piazza",
    bgColor: "bg-[#ffd300]",
    position: "Analysts",
    extraSubDescription: (
      <div className={`p-4 rounded-3xl flex gap-4 bg-[#32046d]`}>
        <TextRiverIcon width={46} height={46} />
        <p className="text-base font-medium text-white">
          It now takes our BI team
          <span className="text-[#ffd300]"> a fifth of the time </span> to
          generate reports our teams need in order to make the most crucial
          business decisions.
        </p>
      </div>
    ),
    leaders: [
      {
        para: "Access data without code or API management. Plug into your data and apply SQL logic to build end-to-end pipelines.",
        description:
          "Invest more time on data modeling. Rivery automatically creates target schemas and manages incremental loads.",
        subDescription:
          "Easily push data directly into your tech stack. Send notifications to Slack, or update user data in your martech.",
      },
    ],
  },
];
