import { TastingCourseItem, ChefProfile, RestaurantReview } from "./types";

export const RESTAURANT_COURSES: TastingCourseItem[] = [
  {
    id: "rest-1",
    name: "Tandoori Malai Lobster & Scallop Crudo",
    category: "starters",
    price: 1400,
    description: "Pan-seared Bay of Bengal scallops and malai butter lobster with finger lime pearls, green apple reduction, and cold-pressed curry leaf oil.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop",
    winePairing: "Sula Tropical Brut Chardonnay",
    dietary: ["Gluten-Free", "Seafood"],
    isSpecial: true,
  },
  {
    id: "rest-2",
    name: "Périgord Black Truffle Naan & Burrata",
    category: "starters",
    price: 950,
    description: "Fresh artisanal burrata, shaved winter black truffle, aged balsamic glaze, and micro basil on wood-fired garlic naan.",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=800&auto=format&fit=crop",
    winePairing: "Grover Zampa Soirée Brut",
    dietary: ["Vegetarian"],
  },
  {
    id: "rest-3",
    name: "Royal Slow-Roasted Lamb Raan",
    category: "mains",
    price: 2800,
    description: "24-hour braised pasture-raised leg of lamb in aromatic Awadhi spices, served with saffron polenta, charred shallots, and smoked marrow jus.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    winePairing: "Grover Zampa Signet Shiraz",
    isSpecial: true,
  },
  {
    id: "rest-4",
    name: "Malabar Coastal Kingfish en Papillote",
    category: "mains",
    price: 1850,
    description: "Wild Arabian Sea kingfish steamed in banana leaf with kokum broth, fresh coconut cream, lemongrass, and aromatic red rice.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
    winePairing: "KRSMA Sauvignon Blanc",
    dietary: ["Gluten-Free"],
  },
  {
    id: "rest-5",
    name: "Saffron Elaneer Payasam & Dark Chocolate Soufflé",
    category: "desserts",
    price: 750,
    description: "Warm 70% dark Valrhona chocolate soufflé served alongside tender coconut saffron payasam and crushed pistachio gelato.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    winePairing: "Sula Late Harvest Chenin Blanc",
    dietary: ["Vegetarian"],
    isSpecial: true,
  },
  {
    id: "rest-6",
    name: "Mysore Cardamom Spiced Old Fashioned",
    category: "cocktails",
    price: 850,
    description: "Aged Indian single malt whiskey, house-infused Mysuru green cardamom reduction, aromatic bitters, and flamed orange zest.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
  },
];

export const CHEF_PROFILE: ChefProfile = {
  name: "Executive Chef Vikramaditya Singh",
  role: "Culinary Director & Head Chef",
  experience: "18+ Years Fine Dining",
  philosophy: "Reimagining centuries-old royal Awadhi and Malabar heritage recipes through modern progressive techniques and locally farm-harvested seasonal ingredients.",
  signatureDish: "24-Hour Royal Braised Lamb Raan with Saffron Polenta",
  awards: [
    "India Today Chef of the Year 2024",
    "Michelin-Trained (Le Gavroche, London)",
    "Top 10 Indian Luxury Culinary Destinations",
  ],
  image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
};

export const RESTAURANT_REVIEWS: RestaurantReview[] = [
  {
    id: "rrev-1",
    author: "Aditya & Sanjana Kapoor",
    rating: 5,
    date: "3 days ago",
    comment: "Celebrated our 10th anniversary at the Chef's Counter. Chef Vikramaditya personally walked us through the 7-course tasting menu. Unforgettable culinary mastery.",
    occasion: "Anniversary Dinner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "rrev-2",
    author: "Radhika Merchant",
    rating: 5,
    date: "1 week ago",
    comment: "The Périgord Truffle Naan with fresh Burrata and the Malabar Kingfish were pure perfection. The sommelier wine pairings elevate every single dish.",
    occasion: "Special Celebration",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
  },
];

export const RESTAURANT_HOURS = {
  lunch: "12:30 PM – 3:30 PM",
  dinner: "7:00 PM – 11:30 PM",
  lastOrder: "10:45 PM Daily",
  dressCode: "Smart Casual / Formal",
  address: "88 Vijayanagar 1st Stage, Near Heritage Park, Mysuru",
  phone: "+91 821 288 9900",
};
