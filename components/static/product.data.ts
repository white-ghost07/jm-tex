import img1 from "@/app/assets/products/category1/detailsimage1.jpg";
import p1 from "@/app/assets/products/category1/p1.jpg";
import p2 from "@/app/assets/products/category1/p2.jpg";
import p3 from "@/app/assets/products/category1/p3.jpg";
import p4 from "@/app/assets/products/category1/p4.jpg";
import p5 from "@/app/assets/products/category1/p5.jpg";
import p6 from "@/app/assets/products/category1/p6.jpg";
import { ProductType } from "@/types/item.type";
export const allProducts: ProductType[] = [
  {
    id: 1,
    hero: {
      title: "HOSIERY",
      description:
        "Experience the spirit of innovation and seamless knit comfort in our meticulously crafted socks, designed for elevated performance.",
      image: img1,
    },

    details: {
      title: "CRAFTING EXCELLENCE",
      intro:
        "As a global leader in hosiery, we provide our customers with manufacturing excellence at a large industrial scale, driven by innovation and sustainability. Using the finest raw materials, advanced knitting techniques, and rigorous quality assurance, we have garnered trust as a responsible partner of choice.",
      bullets: [
        {
          heading: "Large Manufacturing Scale",
          text: "Our manufacturing footprint extends across five vertically integrated plants in Pakistan, alongside facilities in Sri Lanka and China.",
        },
        {
          heading: "Vertical Sampling Facility",
          text: "A dedicated product development and sampling facility with an extensive yarn library, enabling speed with R&I and digital design to foster customer collaboration.",
        },
        {
          heading: "ISO Certified Lab",
          text: "In-house ISO certified, quality assurance lab run by our expert technicians for product and raw material testing.",
        },
      ],
      image1: {
        src: "/images/crafting-right.jpg",
        name: "Crafting right image",
      },
      image2: {
        src: "/images/crafting-bottom.jpg",
        name: "Crafting bottom image",
      },
    },

    products: [
      {
        id: "1",
        title: "COTTON RICH SOCKS",
        description:
          "Everyday essentials elevated with our basic cotton-rich socks, designed for ultimate softness, comfort, and breathability.",
        image: p1,
      },
      {
        id: "2",
        title: "Casual Socks",
        description:
          "Designed for all-day wear, our socks combine premium materials and innovative technology to deliver unparalleled softness and support.",
        image: p2,
      },
      {
        id: "3",
        title: "Sports Socks",
        description:
          "Athletic potential is unlocked with sports socks designed for maximum support, moisture-wicking performance, and comfort",
        image: p3,
      },
      {
        id: "4",
        title: "Technical Socks",
        description:
          "Technical fibres, construction techniques, and performance finishes offer antibacterial properties, breathability, odour, and moisture management features.",
        image: p4,
      },
      {
        id: "5",
        title: "Fashion Socks",
        description:
          "A diverse range featuring vibrant patterns, innovative textures, and playful prints in premium materials.",
        image: p5,
      },
      {
        id: "6",
        title: "TIGHTS & LEGGINGS",
        description:
          "Designed for children and adults, explore our durable tights and premium options, from timeless solid hues to fashionable textures in leggings.",
        image: p6,
      },
    ],
  },
  {
    id: 2,
    hero: {
      title: "Apparel",
      description:
        "Elevate comfort-driven style with our expertly crafted knitted apparel, tailored to enhance movement in everyday experiences.",
      image: img1,
    },

    details: {
      title: "Functional Comfort Knits",
      intro:
        "Infused with the essence of leisure and performance, our knitted apparel manufacturing seamlessly blends comfort and functionality. Our modern knitting facility and dyeing house create versatile garments, offering value addition with our innovative knit fabrics and novelty finishes, where form meets function in every stitch.",
      bullets: [
        {
          heading: "Vertically Integrated",
          text: "Our vertically integrated supply chain, manufacturing control plan, and built-in quality checks ensure transparency, providing a seamless journey from sourcing to the final product.",
        },
        {
          heading: "Automated Operations",
          text: "Offering speed to market with advanced digital technology, automation, and data analytics. Enhanced efficiency and precision through digital tracking, integrated ERP, and virtual sampling.",
        },
        {
          heading: "Novelty Fabrics and Finishes",
          text: "A wide range of performance and cotton-rich to synthetic fabrics developed in-house. Value addition with special applications like embroidery, pigment dyeing, mineral washes, screen-printing, and performance finishes.",
        },
      ],
      image1: {
        src: "/images/crafting-right.jpg",
        name: "Crafting right image",
      },
      image2: {
        src: "/images/crafting-bottom.jpg",
        name: "Crafting bottom image",
      },
    },

    products: [
      {
        id: "1",
        title: "COTTON RICH SOCKS",
        description:
          "Everyday essentials elevated with our basic cotton-rich socks, designed for ultimate softness, comfort, and breathability.",
        image: p1,
      },
      {
        id: "2",
        title: "Casual Socks",
        description:
          "Designed for all-day wear, our socks combine premium materials and innovative technology to deliver unparalleled softness and support.",
        image: p2,
      },
      {
        id: "3",
        title: "Sports Socks",
        description:
          "Athletic potential is unlocked with sports socks designed for maximum support, moisture-wicking performance, and comfort",
        image: p3,
      },
      {
        id: "4",
        title: "Technical Socks",
        description:
          "Technical fibres, construction techniques, and performance finishes offer antibacterial properties, breathability, odour, and moisture management features.",
        image: p4,
      },
      {
        id: "5",
        title: "Fashion Socks",
        description:
          "A diverse range featuring vibrant patterns, innovative textures, and playful prints in premium materials.",
        image: p5,
      },
      {
        id: "6",
        title: "TIGHTS & LEGGINGS",
        description:
          "Designed for children and adults, explore our durable tights and premium options, from timeless solid hues to fashionable textures in leggings.",
        image: p6,
      },
    ],
  },
  {
    id: 3,
    hero: {
      title: "YARNS",
      description:
        "Leading material innovation with advanced technical and sustainable fibre blends including natural, recycled, man-made cellulosic, and synthetic fibres.",
      image: img1,
    },

    details: {
      title: "From fibre to Yarn",
      intro:
        "We weave together expertise, innovation, and precision to craft high quality yarns that fuel our product range and collaborate with weavers, knitters, and denim manufacturers worldwide. From sustainable sourcing to advanced spinning techniques, we are committed to delivering yarns of exceptional quality, versatility, and performance.",
      bullets: [
        {
          heading: "Spinning",
          text: "Producing 25 million kg of yarn using advanced Japanese and European technology and lab equipment every step of the process. Our yarn technology includes ring spun, plain, slub, multi-count, slub lycra, siro slub core, and air covering. We have 50,200 spindles dedicated sampling for continuous innovation.",
        },
        {
          heading: "Yarn Dyeing",
          text: "Highly automated dyeing operations with automatic dyestuff and chemical dispensing system. With dyeing capacity of 4 million kg, we offer an extensive range of colours in Spun and Filament yarns.",
        },
        {
          heading: "Air Covering",
          text: "We use advanced Italian Air Covering technology to produce 1 million kg annually. Covering in-house dyed, dope dyed, and raw yarns with stretch filaments like Lycra and Creora in custom blends.",
        },
      ],
      image1: {
        src: "/images/crafting-right.jpg",
        name: "Crafting right image",
      },
      image2: {
        src: "/images/crafting-bottom.jpg",
        name: "Crafting bottom image",
      },
    },

    products: [
      {
        id: "1",
        title: "COTTON RICH SOCKS",
        description:
          "Everyday essentials elevated with our basic cotton-rich socks, designed for ultimate softness, comfort, and breathability.",
        image: p1,
      },
      {
        id: "2",
        title: "Casual Socks",
        description:
          "Designed for all-day wear, our socks combine premium materials and innovative technology to deliver unparalleled softness and support.",
        image: p2,
      },
      {
        id: "3",
        title: "Sports Socks",
        description:
          "Athletic potential is unlocked with sports socks designed for maximum support, moisture-wicking performance, and comfort",
        image: p3,
      },
      {
        id: "4",
        title: "Technical Socks",
        description:
          "Technical fibres, construction techniques, and performance finishes offer antibacterial properties, breathability, odour, and moisture management features.",
        image: p4,
      },
      {
        id: "5",
        title: "Fashion Socks",
        description:
          "A diverse range featuring vibrant patterns, innovative textures, and playful prints in premium materials.",
        image: p5,
      },
      {
        id: "6",
        title: "TIGHTS & LEGGINGS",
        description:
          "Designed for children and adults, explore our durable tights and premium options, from timeless solid hues to fashionable textures in leggings.",
        image: p6,
      },
    ],
  },
  {
    id: 4,
    hero: {
      title: "Activewear",
      description:
        "Elevated performance with our seamless activewear, engineered to enhance flexibility, durability, and style. Designed to move with your body and built to last.",
      image: img1,
    },

    details: {
      title: "CRAFTING EXCELLENCE",
      intro:
        "As a global leader in hosiery, we provide our customers with manufacturing excellence at a large industrial scale, driven by innovation and sustainability. Using the finest raw materials, advanced knitting techniques, and rigorous quality assurance, we have garnered trust as a responsible partner of choice.",
      bullets: [
        {
          heading: "Large Manufacturing Scale",
          text: "Our manufacturing footprint extends across five vertically integrated plants in Pakistan, alongside facilities in Sri Lanka and China.",
        },
        {
          heading: "Vertical Sampling Facility",
          text: "A dedicated product development and sampling facility with an extensive yarn library, enabling speed with R&I and digital design to foster customer collaboration.",
        },
        {
          heading: "ISO Certified Lab",
          text: "In-house ISO certified, quality assurance lab run by our expert technicians for product and raw material testing.",
        },
      ],
      image1: {
        src: "/images/crafting-right.jpg",
        name: "Crafting right image",
      },
      image2: {
        src: "/images/crafting-bottom.jpg",
        name: "Crafting bottom image",
      },
    },

    products: [
      {
        id: "1",
        title: "COTTON RICH SOCKS",
        description:
          "Everyday essentials elevated with our basic cotton-rich socks, designed for ultimate softness, comfort, and breathability.",
        image: p1,
      },
      {
        id: "2",
        title: "Casual Socks",
        description:
          "Designed for all-day wear, our socks combine premium materials and innovative technology to deliver unparalleled softness and support.",
        image: p2,
      },
      {
        id: "3",
        title: "Sports Socks",
        description:
          "Athletic potential is unlocked with sports socks designed for maximum support, moisture-wicking performance, and comfort",
        image: p3,
      },
      {
        id: "4",
        title: "Technical Socks",
        description:
          "Technical fibres, construction techniques, and performance finishes offer antibacterial properties, breathability, odour, and moisture management features.",
        image: p4,
      },
      {
        id: "5",
        title: "Fashion Socks",
        description:
          "A diverse range featuring vibrant patterns, innovative textures, and playful prints in premium materials.",
        image: p5,
      },
      {
        id: "6",
        title: "TIGHTS & LEGGINGS",
        description:
          "Designed for children and adults, explore our durable tights and premium options, from timeless solid hues to fashionable textures in leggings.",
        image: p6,
      },
    ],
  },
];
