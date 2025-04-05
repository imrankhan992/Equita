import { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Logistic from "./components/Logistic/Logistic.tsx";
import Cta from "./components/CTA/Cta";
import Quality from "./components/Quality/Quality.tsx";
import Articles from "./components/Articles/Articles.tsx";
import Plan from "./components/Plans/Plan.tsx";
import RecentArticles from "./components/Recent Articles/RecentArticles.tsx";
import Map from "./components/Map/Map.tsx";
import Footer from "./components/Footer/Footer";
import slider2 from "./assets/images/sliders/slider2.png";
import slider1 from "./assets/images/sliders/slider1.png";
import aboutus_img1 from "./assets/images/about/1.png";
import aboutus_signature from "./assets/images/signature/1.png";
import logo from "./assets/images/logo/logo-light.png";
import logoDark from "./assets/images/logo/logo-dark.png";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  faWarehouse,
  faPlaneUp,
  faShip,
  faTrailer,
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./components/Header/MenuItem.tsx";
function App() {
  const testimonials = [
    {
      image: "https://demo.zytheme.com/equita/assets/images/testimonial/3.jpg",
      text: "Equita Logistics International customer service is some of the best we have ever had with ocean we like to ship as much as possible with you all.",
      name: "John R Peter",
      position: "movein",
      rating: 4,
    },
    {
      image: "https://demo.zytheme.com/equita/assets/images/testimonial/3.jpg",
      text: "Imran Logistics International customer service is some of the best we have ever had with ocean we like to ship as much as possible with you all.",
      name: "Sarah Khan",
      position: "movein",
      rating: 5,
    },
  ];

  const articlesData = [
    {
      image: "https://demo.zytheme.com/equita/assets/images/blog/grid/1.jpg",
      categories: "cargo, insights",
      title: "Importers achieve cost savings through the First Sale rule!",
      date: "20 jan 2025",
      description:
        "The trade war currently ensuing between the nations around the globe, fiercely with China.",
      link: "#",
    },
    {
      image: "https://demo.zytheme.com/equita/assets/images/blog/grid/1.jpg",
      categories: "cargo, insights",
      title: "How freight forwarding reshapes global trade",
      date: "22 jan 2025",
      description:
        "Global trade continues to evolve and reshape logistics operations. Here’s what’s helping businesses adapt...",
      link: "#",
    },
    {
      image: "https://demo.zytheme.com/equita/assets/images/blog/grid/1.jpg",
      categories: "cargo, insights",
      title: "Top logistics tips for import-export businesses",
      date: "25 jan 2025",
      description:
        "Understanding the key logistics strategies helps small businesses scale their operations smartly...",
      link: "#",
    },
  ];
  const officeLocations = [
    {
      id: 1,
      title: "London office",
      address: "New York 11226 United States.",
      email: "Equita@7oroof.com",
      phone: "(002) 01061245741",
    },
    {
      id: 2,
      title: "Berlin office",
      address: "Berlin 10115 Germany.",
      email: "berlin@equita.com",
      phone: "(003) 01561245741",
    },
    {
      id: 3,
      title: "Manchester office",
      address: "Manchester 11226 United Kingdom.",
      email: "manchester@equita.com",
      phone: "(004) 01061245741",
    },
  ];

  const navItems = [
    {
      label: "Home",
      subItems: [{ items: ["Home Main", "Home Modern", "Home Classic"] }],
    },
    {
      label: "Company",
      subItems: [
        {
          items: [
            "About Us",
            "Core Values",
            "Leadership Team",
            "Global Locations",
            "Our Gallery",
            "Awards & Recognition",
            "Careers",
          ],
        },
      ],
    },
    {
      label: "Services",
      subItems: [
        {
          title: "Transport Services",
          items: [
            "Logistics Solutions",
            "Storage Services",
            "Air Cargo",
            "Sea Freight",
            "Ground Shipping",
            "Supply Management",
            "Packaging Solutions",
          ],
        },
        {
          title: "Industry Solutions",
          items: [
            "Web Development",
            "Business Services",
            "Retail & Commerce",
            "Health & Life Sciences",
            "Manufacturing & Chemicals",
            "Energy & Utilities",
            "Food & Hospitality",
            "Energy & Petrochemicals",
          ],
        },
      ],
    },
    {
      label: "News & Media",
      subItems: [
        {
          items: [
            "Blog Section",
            "Single Post",
            "Our Offerings",
            "Case Study Gallery",
            "Case Study Standard View",
            "Individual Case Study",
          ],
        },
      ],
    },
    {
      label: "Features",
      subItems: [
        {
          items: [
            "Get a Quote",
            "Shipment Tracking",
            "Locate Us",
            "Support & FAQs",
          ],
        },
      ],
    },
  ];

  const mobileMenuItems = [
    {
      label: "Home",
      sections: [{ links: ["Home Main", "Home Modern", "Home Classic"] }],
    },
    {
      label: "Company",
      sections: [
        {
          links: [
            "About Us",
            "Core Values",
            "Leadership Team",
            "Global Locations",
            "Our Gallery",
            "Awards & Recognition",
            "Careers",
          ],
        },
      ],
    },
    {
      label: "Services",
      sections: [
        {
          title: "Transportation",
          links: [
            "Warehousing",
            "Air Freight",
            "Ocean Freight",
            "Road Freight",
            "Supply Chain",
            "Packaging",
          ],
        },
        {
          title: "Industries",
          links: [
            "Retail & Consumer",
            "Sciences & Healthcare",
            "Industrial & Chemical",
            "Power Generation",
            "Food & Beverage",
            "Oil & Gas",
          ],
        },
      ],
    },
    {
      label: "News & Blogs",
      sections: [
        {
          links: [
            "Our Blog",
            "Single Blog Post",
            "Our Services",
            "Case Studies Grid",
            "Case Studies Standard",
            "Single Case Study",
          ],
        },
      ],
    },
    {
      label: "Features",
      sections: [
        {
          links: [
            "Request a Quote",
            "Track & Trace",
            "Find a Location",
            "Help & FAQs",
          ],
        },
      ],
    },
  ];

  const languages = ["English", "Arabic"];
  const contactButton = "Request a Quote";

  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={18}
      width={18}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      color="white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
  return (
    <>
      <Header
        logo={logo}
        logoDark={logoDark}
        navItems={navItems}
        contactButton={contactButton}
        languages={languages}
        searchIconSVG={searchIcon}
        menuItems={mobileMenuItems}
      />

      {/* If you ever want to use MenuItem separately */}
      {/* <MenuItem menuItems={mobileMenuItems} /> */}

      <Hero
        cards={[
          {
            icon: faWarehouse,
            subtitle: "Sustainable",
            title: "Warehousing Services",
            active: true,
          },
          {
            icon: faPlaneUp,
            subtitle: "Sustainable",
            title: "Air Freight Service",
            color: "red",
          },
          {
            icon: faShip,
            subtitle: "Sustainable",
            title: "Ocean Freight Service",
            color: "red",
          },
          {
            icon: faTrailer,
            subtitle: "Sustainable",
            title: "Road Freight Service",
            color: "red",
          },
        ]}
        sliderContent={[
          {
            image: slider2,
            span: "Flexible, Improved, and Accelerated Solutions",
            heading: "Full Sustainable Cargo Solutions!",
            paragraph:
              "Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.",
            redButton: "More About Us",
            blackButton: "Our Services",
          },
          {
            image: slider1,
            span: "Your Flexible Road Direction!",
            heading: "Your Flexible Road Direction!",
            paragraph:
              "Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.",
            redButton: "More About Us",
            blackButton: "Our Services",
          },
          {
            image:
              "https://demo.zytheme.com/equita/assets/images/sliders/3.jpg",
            span: "Your Flexible Road Direction!",
            heading: "full sustainable cargo solutions!",
            paragraph:
              "Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide",
            redButton: "More About Us",
            blackButton: "Our Services",
          },
          {
            image:
              "https://demo.zytheme.com/equita/assets/images/sliders/2.jpg",
            span: "Your Flexible Road Direction!",
            heading: "Air Freight that saves your time!",
            paragraph:
              "Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide",
            redButton: "More About Us",
            blackButton: "Our Services",
          },
        ]}
      />
      <Logistic
        logisticImg={aboutus_img1}
        logisticImgAlt="Reliable Logistic & Transport Solutions Saves Your Time!"
        logisticImgSrcSet="Reliable Logistic & Transport Solutions Saves Your Time!"
        countEnd={470}
        countUnit="m"
        countText="Delivered Goods"
        sectionTitle="Providing Full Range Of Transportation Worldwide."
        sectionHeading="Reliable Logistic & Transport Solutions Saves Your Time!"
        leftParagraph1="Equita Group is a representative logistics operator providing full range of service in the sphere of customs clearance transportation worldwide for any cargo"
        leftParagraph2="We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and combined with experience through integrated supply chain solutions!"
        qualityHeading="Quality"
        qualityText="Following the quality of our service thus having gained trust of our many clients."
        reliabilityHeading="rellability"
        reliabilityText="We provide with cargo safety throughout all the stages of our delivery process.."
        signatureName="Michael Dawson"
        signatureDesignation="CEO Equita Group"
        signatureImg={aboutus_signature}
      />

      <Cta />
      {/* <Companies /> */}
      <Quality
        heading="Directions, That Matter!"
        subheading="Digital Freight That Saves Your Time!"
        description="We pride ourselves on providing the best transport and shipping services available all over the world. Our skilled personnel, utilising communications, tracking and processing software, combined with decades of experience! Through integrated supply chain solutions, Equita drives sustainable competitive advantages to some of Australia's largest companies."
        advantages={[
          "Quality Control System",
          "Unrivalled workmanship",
          "100% Satisfaction Guarantee",
          "Accurate Testing Processes",
          "Highly Professional Staff",
          "Professional and Qualified",
        ]}
        testimonialNameLeft="Imran Price, Certified Forwarders"
        testimonialNameRight="Imran Price, Certified Forwarders"
        imageLeft="https://demo.zytheme.com/equita/assets/images/cta/2.jpg"
        imageRight="https://demo.zytheme.com/equita/assets/images/cta/3.jpg"
      />
      <Articles
        subtitle="Explore Recent Works"
        title="Featured Products"
        showcaseSubtitle="Join Us Today"
        showcaseTitle="Our Partners"
        showcaseText="Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience!"
        sliderItems={[
          {
            image:
              "https://demo.zytheme.com/equita/assets/images/work/full/2.jpg",
            title: "Minimize Manufacturing",
            category: "Analytics, Optimization",
            description:
              "Our Group has been building relationships and projects that last. Serving an impressive list of long-term.",
          },
          {
            image:
              "https://demo.zytheme.com/equita/assets/images/work/full/3.jpg",
            title: "Logistics Powerhouse",
            category: "Logistics, Transportation",
            description:
              "Driving competitive advantage through smart solutions and deep experience.",
          },
          {
            image:
              "https://demo.zytheme.com/equita/assets/images/work/full/2.jpg",
            title: "Minimize Manufacturing",
            category: "Analytics, Optimization",
            description:
              "Our Group has been building relationships and projects that last. Serving an impressive list of long-term.",
          },
          {
            image:
              "https://demo.zytheme.com/equita/assets/images/work/full/3.jpg",
            title: "Logistics Powerhouse",
            category: "Logistics, Transportation",
            description:
              "Driving competitive advantage through smart solutions and deep experience.",
          },
          {
            image:
              "https://demo.zytheme.com/equita/assets/images/work/full/2.jpg",
            title: "Minimize Manufacturing",
            category: "Analytics, Optimization",
            description:
              "Our Group has been building relationships and projects that last. Serving an impressive list of long-term.",
          },

          // Add more as needed
        ]}
        partnerLogos={[
          "https://demo.zytheme.com/equita/assets/images/clients/6.png",
          "https://demo.zytheme.com/equita/assets/images/clients/5.png",
          "https://demo.zytheme.com/equita/assets/images/clients/1.png",
          "https://demo.zytheme.com/equita/assets/images/clients/4.png",
          "https://demo.zytheme.com/equita/assets/images/clients/2.png",
          "https://demo.zytheme.com/equita/assets/images/clients/2.png",
          "https://demo.zytheme.com/equita/assets/images/clients/2.png",
        ]}
      />

      <Plan
        subtitle="what our clients say!"
        title={`Individually Assess\nEach Plan And Offer\nOptimal Solutions!`}
        description="Serving an impressive list of long-term clients with experience and expertise in multiple industries."
        buttonLabel="our services"
        testimonials={testimonials}
      />

      <RecentArticles
        subtitle="insight and trends"
        heading="recent articles"
        description="Follow our latest news and thoughts which focuses exclusively on insight, industry trends, top news headlines."
        articles={articlesData}
      />
      <Map offices={officeLocations} buttonText="Geo Locations" />
      <Footer
        logoUrl="https://demo.zytheme.com/equita/assets/images/logo/logo-light.png"
        newsletter={{
          description: "Sign up for industry alerts,\ninsights from Equita.",
          placeholder: "Your Email Address",
          buttonText: "sign up!",
        }}
        socials={[
          { icon: faFacebookF, link: "#" },
          { icon: faInstagram, link: "#" },
          { icon: faTwitter, link: "#" },
        ]}
        linkGroups={[
          {
            title: "Services",
            links: [
              { label: "About us", href: "#" },
              { label: "Careers", href: "#" },
              { label: "News", href: "#" },
              { label: "Contact us", href: "#" },
            ],
          },
          {
            title: "Industries",
            links: [
              { label: "Investment Banking", href: "#" },
              { label: "Asset Management", href: "#" },
              { label: "Brokerage Services", href: "#" },
              { label: "Research Services", href: "#" },
            ],
          },
        ]}
        quickContact={{
          message:
            "If you have any questions or need help, feel free to contact with our team.",
          phone: "01061245741",
          address: "2307 Beverley Rd Brooklyn, New York 11226 United States.",
        }}
        copyright="© Equita, With Love by Zytheme.com"
      />
    </>
  );
}

export default App;
