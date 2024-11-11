import { DropdownItem } from "@/types";
import {
  FaRegCreditCard,
  FaPiggyBank,
  FaMoneyBillWave,
  FaChartLine,
  FaShieldAlt,
  FaLaptop,
  FaHeadset,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaReceipt,
  FaUserCircle,
  FaHistory,
  FaBriefcase,
  FaMoneyCheckAlt,
  FaStore,
  FaBuilding,
  FaChartPie,
  FaUniversity,
  FaWarehouse,
} from "react-icons/fa";
export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

export const topCategoryStyles = {
  "Food and Drink": {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-success-25",
    circleBg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionCategoryStyles = {
  "Food and Drink": {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transfer: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  Travel: {
    borderColor: "border-[#0047AB]",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};

export const navbarItems1: DropdownItem[] = [
  {
    href: "#personal-accounts",
    label: "Personal Accounts",
    icon: <FaPiggyBank />,
  },
  { href: "#credit-cards", label: "Credit Cards", icon: <FaRegCreditCard /> },
  { href: "#loans", label: "Loans", icon: <FaMoneyBillWave /> },
  { href: "#investments", label: "Investments", icon: <FaChartLine /> },
  { href: "#insurance", label: "Insurance", icon: <FaShieldAlt /> },
  { href: "#online-banking", label: "Online Banking", icon: <FaLaptop /> },
  { href: "#customer-support", label: "Customer Support", icon: <FaHeadset /> },
];

export const navbarItems2: DropdownItem[] = [
  {
    href: "#corporate-accounts",
    label: "Corporate Accounts",
    icon: <FaBuilding />,
  },
  {
    href: "#corporate-loans",
    label: "Corporate Loans",
    icon: <FaMoneyCheckAlt />,
  },
  {
    href: "#treasury-services",
    label: "Treasury Services",
    icon: <FaWarehouse />,
  },
  { href: "#trade-finance", label: "Trade Finance", icon: <FaBriefcase /> },
  {
    href: "#corporate-insurance",
    label: "Corporate Insurance",
    icon: <FaChartLine />,
  },
  {
    href: "#corporate-investments",
    label: "Corporate Investments",
    icon: <FaUniversity />,
  },
  {
    href: "#corporate-support",
    label: "Corporate Support",
    icon: <FaHeadset />,
  },
];

export const navbarItems3: DropdownItem[] = [
  {
    href: "#business-accounts",
    label: "Business Accounts",
    icon: <FaBriefcase />,
  },
  {
    href: "#business-loans",
    label: "Business Loans",
    icon: <FaMoneyCheckAlt />,
  },
  { href: "#merchant-services", label: "Merchant Services", icon: <FaStore /> },
  {
    href: "#business-insurance",
    label: "Business Insurance",
    icon: <FaBuilding />,
  },
  {
    href: "#business-investments",
    label: "Business Investments",
    icon: <FaChartPie />,
  },
  {
    href: "#corporate-banking",
    label: "Corporate Banking",
    icon: <FaUniversity />,
  },
  { href: "#sme-support", label: "SME Support", icon: <FaHeadset /> },
];

export const navbarItems4: DropdownItem[] = [
  { href: "#atm-locator", label: "ATM Locator", icon: <FaMapMarkerAlt /> },
  { href: "#online-banking", label: "Online Banking", icon: <FaLaptop /> },
  { href: "#mobile-banking", label: "Mobile Banking", icon: <FaMobileAlt /> },
  { href: "#bill-payments", label: "Bill Payments", icon: <FaReceipt /> },
  {
    href: "#account-management",
    label: "Account Management",
    icon: <FaUserCircle />,
  },
  {
    href: "#transaction-history",
    label: "Transaction History",
    icon: <FaHistory />,
  },
  { href: "#customer-support", label: "Customer Support", icon: <FaHeadset /> },
];
export const sections = [
  {
    head: "Banking",
    links: [
      "Personal Accounts",
      "Business Accounts",
      "Loans",
      "Credit Cards",
      "Investments",
      "Business Accounts",
      "Loans",
      "Business Accounts",
      "Loans",
    ],
  },
  {
    head: "Insurance",
    links: [
      "Health Insurance",
      "Life Insurance",
      "Car Insurance",
      "Home Insurance",
      "Travel Insurance",
      "Home Insurance",
      "Travel Insurance",
    ],
  },
  {
    head: "Investing",
    links: [
      "Stock Market",
      "Bonds",
      "Mutual Funds",
      "Retirement Plans",
      "Cryptocurrency",
    ],
  },
  {
    head: "Real Estate",
    links: [
      "Buying a Home",
      "Selling a Home",
      "Renting",
      "Mortgage Rates",
      "Commercial Real Estate",
    ],
  },
  {
    head: "Travel",
    links: [
      "Flight Bookings",
      "Hotel Reservations",
      "Travel Insurance",
      "Holiday Packages",
      "Travel Guides",
      "Travel Insurance",
      "Holiday Packages",
      "Travel Guides",
    ],
  },
  {
    head: "Technology",
    links: ["Gadgets", "Software", "AI & Robotics", "Tech News", "Startups"],
  },
];
export const teamData = [
  {
    src: "/team-1.jpg",
    alt: "Team member 1",
    name: "John Doe",
    position: "Software Engineer",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "/team-2.jpg",
    alt: "Team member 2",
    name: "Jane Smith",
    position: "Project Manager",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "/team-3.jpg",
    alt: "Team member 3",
    name: "Michael Brown",
    position: "UI/UX Designer",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    src: "/team-4.jpg",
    alt: "Team member 4",
    name: "Emily Johnson",
    position: "Data Scientist",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
