import Glom from "../assets/img/partners-logo/glom.png";
import Netcode from "../assets/img/partners-logo/netcode.png";
import Tshirt from "../assets/img/tshirt.png";
import AmbassadorMan from "../assets/img/ambassador-man.png";

export const PARTNERS_SEEDER = [
  {
    id: 1,
    name: "NETCODE",
    logo_color: Netcode,
    logo_white: Netcode,
    logo_black: Netcode,
    link: "https://twitter.com/netcode_team",
  },
  {
    id: 2,
    name: "GLOM SOFT",
    logo_color: Glom,
    logo_white: Glom,
    logo_black: Glom,
    link: "https://www.facebook.com/glomsoft",
  },
];

export const COLLECTIONS_SEEDER = [
  {
    id: 1,
    colors: ["#6DD5ED", "#2193B0"],
    image: "./collection-preview/tshirt.png",
    slug: "tshirt",
    title: "T-SHIRTS",
  },
  {
    id: 2,
    colors: ["#606C88", "#3F4C6B"],
    image: "./collection-preview/hoodie.png",
    slug: "hoodie",
    title: "HOODIES",
  },
  {
    id: 3,
    colors: ["#FEB47B", "#FF7E5F"],
    image: "./collection-preview/sticker.png",
    slug: "sticker",
    title: "STICKERS",
  },
  {
    id: 4,
    colors: ["#DA22FF", "#9733EE"],
    image: "./collection-preview/hat.png",
    slug: "hat",
    title: "HATS",
  },
  {
    id: 5,
    colors: ["#E0EAFC", "#CFDEF3"],
    image: "./collection-preview/mug.png",
    slug: "mug",
    title: "MUGS",
  },
  {
    id: 6,
    colors: ["#FFCC33", "#FFB347"],
    image: "./collection-preview/phone-case.png",
    slug: "phone-case",
    title: "PHONE CASES",
  },
  {
    id: 7,
    colors: ["#4BE69B", "#11998E"],
    image: "./collection-preview/bracelet.png",
    slug: "bracelet",
    title: "BRACELETS",
  },
  {
    id: 8,
    colors: ["#673AB7", "#512DA8"],
    image: "./collection-preview/mask.png",
    slug: "mask",
    title: "MASKS",
  },
  {
    id: 9,
    colors: ["#E35D5B", "#E53935"],
    image: "./collection-preview/sweatshirt.png",
    slug: "sweatshirt",
    title: "SWEATSHIRTS",
  },
  {
    id: 10,
    colors: ["#2A5298", "#1E3C72"],
    image: "./collection-preview/polo.png",
    slug: "polo",
    title: "POLOS",
  },
  {
    id: 11,
    colors: ["#D3CCE3", "#E9E4F0"],
    image: "./collection-preview/poster.png",
    slug: "poster",
    title: "THE POSTERS",
  },
];

export const GOODIES_SEEDER = [
  {
    id: 1,
    color: "#CCDDFF",
    image: Tshirt,
    name: "Linux is the whole house",
    slug: "linux-is-the-whole-house",
    promoPercentage: 23,
    price: 6500,
    inPromo: true,
  },
  {
    id: 2,
    color: "#C7C9D9",
    image: Tshirt,
    name: "Linux is the whole house",
    slug: "linux-is-the-whole-house",
    promoPercentage: 23,
    price: 6500,
    inPromo: false,
  },
  {
    id: 3,
    color: "#CCDDFF",
    image: Tshirt,
    name: "Linux is the whole house",
    slug: "linux-is-the-whole-house",
    promoPercentage: 23,
    price: 6500,
    inPromo: true,
  },
  {
    id: 4,
    color: "#e3fff1",
    image: Tshirt,
    name: "Linux is the whole house",
    slug: "linux-is-the-whole-house",
    promoPercentage: 23,
    price: 6500,
    inPromo: false,
  },
  {
    id: 5,
    color: "#CCDDFF",
    image: Tshirt,
    name: "Linux is the whole house",
    slug: "linux-is-the-whole-house",
    promoPercentage: 23,
    price: 6500,
    inPromo: true,
  },
  {
    id: 6,
    color: "#C7C9D9",
    image: Tshirt,
    name: "Linux is the whole house",
    slug: "linux-is-the-whole-house",
    promoPercentage: 23,
    price: 6500,
    inPromo: false,
  },
  {
    id: 7,
    color: "#CCDDFF",
    image: Tshirt,
    name: "Linux is the whole house",
    slug: "linux-is-the-whole-house",
    promoPercentage: 23,
    price: 6500,
    inPromo: true,
  },
  {
    id: 8,
    color: "#e3fff1",
    image: Tshirt,
    name: "Linux is the whole house",
    slug: "linux-is-the-whole-house",
    promoPercentage: 23,
    price: 6500,
    inPromo: false,
  },
];

export const AMBASSADORS_SEEDER = {
  colors: ["#3E7BFA", "#6600CC"],
  list: [
    {
      id: 1,
      name: "Angelo",
      image: AmbassadorMan,
      social: [
        {
          id: 1,
          name: "twitter",
          link: "https://twitter.com/the_artemesian",
        },
      ],
    },
    {
      id: 2,
      name: "Rayan",
      image: AmbassadorMan,
      social: [
        {
          id: 1,
          name: "twitter",
          link: "https://twitter.com/the_artemesian",
        },
      ],
    },
    {
      id: 3,
      name: "Angelo",
      image: AmbassadorMan,
      social: [
        {
          id: 1,
          name: "twitter",
          link: "https://twitter.com/the_artemesian",
        },
      ],
    },
    {
      id: 4,
      name: "Rayan",
      image: AmbassadorMan,
      social: [
        {
          id: 1,
          name: "twitter",
          link: "https://twitter.com/the_artemesian",
        },
      ],
    },
  ],
};

export const GOODIE_SEEDER = {
  id: 1,
  name: "Linux is the whole house",
  slug: "linux-is-the-whole-house",
  collection: { id: 1, name: "T-Shirt" },
  promoPercentage: 23,
  price: 6500,
  inPromo: false,
  views: 234,
  sizes: [
    { id: 1, size: "S" },
    { id: 2, size: "M" },
  ],
  mainImage: { id: 1, color: "#C7C9D9", image: Tshirt },
  availableColors: [
    { id: 1, color: "#CCDDFF" },
    { id: 2, color: "#e3fff1" },
    { id: 3, color: "#C7C9D9" },
  ],
  images: [
    {
      id: 1,
      image: Tshirt,
      color: "#C7C9D9",
    },
    { id: 2, image: Tshirt, color: "#CCDDFF" },
    { id: 3, image: Tshirt, color: "#e3fff1" },
  ],
};

export const CART_SEEDER = {
  "12345678909876543": {
    cartID: "12345678909876543",
    id: 1,
    name: "Linux is the whole house",
    slug: "linux-is-the-whole-house",
    collection: { id: 1, name: "T-Shirt" },
    promoPercentage: 23,
    price: 6500,
    inPromo: false,
    views: 234,
    sizes: [
      { id: 1, size: "S" },
      { id: 2, size: "M" },
    ],
    mainImage: { id: 1, color: "#C7C9D9", image: Tshirt },
    availableColors: [
      { id: 1, color: "#CCDDFF" },
      { id: 2, color: "#e3fff1" },
      { id: 3, color: "#C7C9D9" },
    ],
    images: [
      {
        id: 1,
        image: Tshirt,
        color: "#C7C9D9",
      },
      { id: 2, image: Tshirt, color: "#CCDDFF" },
      { id: 3, image: Tshirt, color: "#e3fff1" },
    ],
    selectedColor: { id: 2, color: "#CCDDFF" },
    selectedSize: { id: 2, size: "M" },
    quantity: 2,
  },
  "123456789098asd76543": {
    cartID: "123456789098asd76543",
    id: 1,
    name: "Linux is the whole house",
    slug: "linux-is-the-whole-house",
    collection: { id: 1, name: "T-Shirt" },
    promoPercentage: 23,
    price: 6500,
    inPromo: false,
    views: 234,
    sizes: [
      { id: 1, size: "S" },
      { id: 2, size: "M" },
    ],
    mainImage: { id: 1, color: "#C7C9D9", image: Tshirt },
    availableColors: [
      { id: 1, color: "#CCDDFF" },
      { id: 2, color: "#e3fff1" },
      { id: 3, color: "#C7C9D9" },
    ],
    images: [
      {
        id: 1,
        image: Tshirt,
        color: "#C7C9D9",
      },
      { id: 2, image: Tshirt, color: "#CCDDFF" },
      { id: 3, image: Tshirt, color: "#e3fff1" },
    ],
    selectedColor: { id: 3, color: "#e3fff1" },
    selectedSize: { id: 2, size: "S" },
    quantity: 8,
  },
};
