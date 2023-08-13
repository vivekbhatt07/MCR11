import {
  Dashboard,
  AllInbox,
  ProductionQuantityLimits,
} from "@mui/icons-material";

export const sidebarItemList = [
  {
    label: "Dashboard",
    icon: <Dashboard />,
    reach: "/",
  },
  {
    label: "Departments",
    icon: <AllInbox />,
    reach: "/departments",
  },
  {
    label: "Products",
    icon: <ProductionQuantityLimits />,
    reach: "/products",
  },
];
