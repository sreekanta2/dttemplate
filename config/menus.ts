import {
  BarChart2Icon,
  CalendarClock,
  CalendarDays,
  ClipboardCheck,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  FormInput,
  Heart,
  Layout,
  LayoutDashboard,
  Lock,
  LucideShield,
  Mail,
  MapPin,
  MessageSquare,
  Receipt,
  Settings,
  Share2,
  Star,
  Table,
  User,
  UserPlus,
  Users,
  XOctagon,
} from "lucide-react";

export interface MenuItemProps {
  title?: string;
  icon?: React.ElementType;
  href?: string;
  child?: MenuItemProps[];
  megaMenu?: MenuItemProps[];
  multi_menu?: MenuItemProps[];
  nested?: MenuItemProps[];
  onClick?: () => void;
  isHeader?: boolean;
}
const pagesRoutes = [
  // pages

  {
    isHeader: true,
    title: "Pages",
  },
  // authentication
  {
    title: "Authentication",

    icon: LayoutDashboard,
    child: [
      {
        title: "Sing in",
        multi_menu: [
          { title: "Sign In 01", href: "login1" },
          { title: "Sign In 02", href: "login2" },
          { title: "Sign In 03", href: "login3" },
          { title: "Sign In 04", href: "login4" },
        ],
      },

      {
        title: "Sign Up",
        multi_menu: [
          { title: "Sign Up 01", href: "register" },
          { title: "Sign Up 02", href: "register2" },
          { title: "Sign Up 03", href: "register3" },
          { title: "Sign Up 04", href: "register4" },
        ],
      },

      {
        title: "Forgot Password",
        multi_menu: [
          {
            title: "Forgot Password 01",
            href: "forgot",
          },
          {
            title: "Forgot Password 02",
            href: "forgot2",
          },
          {
            title: "Forgot Password 03",
            href: "forgot3",
          },
          {
            title: "Forgot Password 04",
            href: "forgot4",
          },
        ],
      },
      {
        title: "Lock Screen",
        href: "lock-screen",
        multi_menu: [
          { title: "Lock Screen 01", href: "lock" },
          { title: "Lock Screen 02", href: "lock2" },
          { title: "Lock Screen 03", href: "lock3" },
          { title: "Lock Screen 04", href: "lock4" },
        ],
      },

      {
        title: "Two Step",
        multi_menu: [
          { title: "Two-Step 01", href: "verify" },
          { title: "Two-Step 02", href: "verify2" },
          { title: "Two-Step 03", href: "verify3" },
          { title: "Two-Step 04", href: "verify4" },
        ],
      },

      {
        title: "Create password",
        multi_menu: [
          {
            title: "Password Create 01",
            href: "create-password",
          },
          {
            title: "Password Create 02",
            href: "create-password2",
          },
          {
            title: "Password Create 03",
            href: "create-password3",
          },
          {
            title: "Password Create 04",
            href: "create-password4",
          },
        ],
      },
    ],
  },
  // error
  {
    isHeader: true,
    title: "Error",
  },
  {
    title: "Error ",
    icon: XOctagon,
    child: [
      { title: "Error 401", href: "401" },
      { title: "Error 403", href: "403" },
      { title: "Error 404", href: "404" },
      { title: "Error 419", href: "419" },
      { title: "Error 429", href: "429" },
      { title: "Error 500", href: "500" },
      { title: "Error 503", href: "503" },
    ],
  },
  // elements
  {
    isHeader: true,
    title: "Elements",
  },
  // components
  {
    title: "Components",
    icon: Layout,
    child: [
      {
        title: "Base ui",
        multi_menu: [
          { title: "Accordion", href: "accordion" },
          { title: "Alert", href: "alert" },
          { title: "Avatar", href: "avatar" },
          { title: "Badge", href: "badge" },
          { title: "Breadcrumb", href: "breadcrumb" },
          { title: "Button", href: "button" },
          { title: "Card", href: "card" },
          { title: "Carousel", href: "carousel" },
          { title: "Color", href: "color" },
          { title: "Combobox", href: "combobox" },
          { title: "Command", href: "command" },
          { title: "Dropdown", href: "dropdown" },
          { title: "Dialog", href: "dialog" },
          { title: "Kbd", href: "kbd" },
          { title: "Pagination", href: "pagination" },
          { title: "Popover", href: "popover" },
          { title: "Progress", href: "progress" },
          { title: "Sheet", href: "sheet" },
          { title: "Skeleton", href: "skeleton" },
          { title: "Tabs", href: "tabs" },
          { title: "Toast", href: "toast" },
          { title: "Tooltip", href: "tooltip" },
          { title: "Typography", href: "typography" },
        ],
      },
      {
        title: "Advanced Ui",
        multi_menu: [
          { title: "Affix", href: "affix" },
          { title: "Calendar", href: "calendar-page" },
          { title: "Steps", href: "steps" },
          { title: "Timeline", href: "timeline" },
          { title: "Tree", href: "tree" },
        ],
      },
    ],
  },
  // forms
  {
    isHeader: true,
    title: "Forms",
  },
  //

  {
    title: "Forms",
    icon: FormInput,
    child: [
      { title: "Autocomplete", href: "autocomplete" },
      { title: "Checkbox", href: "checkbox" },
      { title: "File Uploader", href: "file-uploader" },
      { title: "Input", href: "input" },
      { title: "Input Group", href: "input2" },
      { title: "Input Mask", href: "input-mask" },
      { title: "Radio", href: "radio" },
      { title: "Range Slider", href: "slider" },
      { title: "Rating", href: "rating" },
      {
        title: "Select",

        multi_menu: [
          { title: "Select", href: "form-select" },
          { title: "React Select", href: "react-select" },
        ],
      },
      { title: "Switch", href: "switch" },
      { title: "Textarea", href: "textarea" },
      { title: "Form Layout", href: "form-layout" },
      {
        title: "Form Validation",
        multi_menu: [
          {
            title: "Use Controller",
            href: "validation-controller",
          },
          {
            title: "Use Form",
            href: "validation-useform",
          },
        ],
      },
      { title: "Form Wizard", href: "form-wizard" },
    ],
  },
  // tables
  {
    title: "Tables",
    icon: Table,
    child: [
      { title: "simple table", href: "simple-table" },
      { title: "Tailwind Table", href: "tailwindui-table" },
      { title: "Data Table", href: "data-table" },
    ],
  },

  // charts
  {
    title: "chart",
    icon: BarChart2Icon,
    child: [
      {
        title: "Apex Chart",
        multi_menu: [
          { title: "Line", href: "charts-appex-line" },
          { title: "Area", href: "charts-appex-area" },
          { title: "Column", href: "charts-appex-column" },
          { title: "Bar", href: "charts-appex-bar" },
          { title: "Combo/Mixed", href: "charts-appex-combo" },
          { title: "Range Area", href: "charts-appex-range" },
          { title: "Timeline", href: "charts-appex-timeline" },
          { title: "Funnel", href: "charts-appex-funnel" },
          { title: "Candle Stick", href: "charts-appex-candlestick" },
          { title: "Boxplot", href: "charts-appex-boxplot" },
          { title: "Pie", href: "charts-appex-pie" },
          { title: "Radar", href: "charts-appex-radar" },
          { title: "Polar Area", href: "charts-appex-polararea" },
          { title: "Radial Bars", href: "charts-appex-radialbars" },
          { title: "Bubble", href: "charts-appex-bubble" },
          { title: "Scatter", href: "charts-appex-scatter" },
          { title: "Heatmap", href: "charts-appex-heatmap" },
          { title: "Treemap", href: "charts-appex-treemap" },
        ],
      },
      // Re Chart
      {
        title: "Re Chart",
        href: "re-chart",
        multi_menu: [
          { title: "Line", href: "charts-rechart-line" },
          { title: "Area", href: "charts-rechart-area" },
          { title: "Bar", href: "charts-rechart-bar" },
          { title: "Scatter", href: "charts-rechart-scatter" },
          { title: "Composed", href: "charts-rechart-composed" },
          { title: "Pie", href: "charts-rechart-pie" },
          { title: "Radar", href: "charts-rechart-radar" },
          { title: "Radial Bar", href: "charts-rechart-radialbar" },
          { title: "Tree Map", href: "charts-rechart-treemap" },
        ],
      },
      // chart js
      {
        title: "Chart js",
        href: "pie-chart",
        multi_menu: [
          { title: "Bar", href: "charts-chartjs-bar" },
          { title: "Line", href: "charts-chartjs-line" },
          { title: "Area", href: "charts-chartjs-area" },
          { title: "Other", href: "charts-chartjs-other" },
          { title: "Scales", href: "charts-chartjs-scales" },
          { title: "Scale Options", href: "charts-chartjs-scaleoptions" },
          { title: "Legend", href: "charts-chartjs-legend" },
          { title: "Title", href: "charts-chartjs-title" },
          { title: "Tooltip", href: "charts-chartjs-tooltip" },
          {
            title: "Scriptable Options",
            href: "charts-chartjs-scriptable",
          },
          { title: "Animations", href: "charts-chartjs-animations" },
        ],
      },
    ],
  },
  // maps
  {
    title: "Maps",
    icon: MapPin,
    child: [
      { title: "Google Map", href: "maps-google" },
      { title: "Vector Map", href: "maps-vector" },
    ],
  },
];
// specific configuration
export const doctorConfig: MenuItemProps[] = [
  {
    isHeader: true,
    title: "Menu",
  },

  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "dashboard",
  },
  {
    title: "Requests",
    href: "requests",
    icon: ClipboardCheck,
  },
  {
    title: "Appointments",
    href: "appointments",
    icon: CalendarDays,
  },

  {
    title: "My Patients",
    href: "patients",
    icon: Users,
  },
  {
    title: "Messages",
    href: "chat",
    icon: MessageSquare,
  },
  {
    title: "Email",
    href: "email",
    icon: Mail,
  },
  {
    title: "Available Timings",
    href: "available-timings",
    icon: CalendarClock,
  },

  {
    title: "Specialties & Services",
    href: "specialties-services",
    icon: Clock,
  },
  {
    title: "Reviews",
    href: "reviews",
    icon: Star,
  },
  {
    title: "Accounts",
    href: "accounts",
    icon: CreditCard,
  },
  {
    title: "Profile",
    href: "profile",
    icon: User,
  },
  // {
  //   title: "Invoices",
  //   href: "/invoices",
  //   icon: FileText,
  //   child: [
  //     {
  //       title: "Create Invoice",
  //       href: "/create-invoice",
  //       icon: DollarSign,
  //     },

  //     {
  //       title: " Invoices List",
  //       href: "/invoice-list",
  //       icon: Heart,
  //     },
  //   ],
  // },
  {
    title: "Payout Settings",
    href: "payout-settings",
    icon: DollarSign,
  },

  {
    title: "Settings",
    href: "settings",
    icon: Settings,
  },

  {
    title: "Social Media",
    href: "socials",
    icon: Share2,
  },

  {
    title: "Change Password",
    href: "change-password",

    icon: Lock,
  },
];

// specific configuration
export const patientConfig: MenuItemProps[] = [
  {
    isHeader: true,
    title: "Patient Dashboard",
  },

  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "dashboard",
  },

  {
    title: "Appointments",
    href: "appointments",
    icon: CalendarDays,
  },
  {
    title: "Favorites",
    href: "favorites",
    icon: Users,
  },
  {
    title: " Dependents",
    href: "dependents",
    icon: UserPlus,
  },
  {
    title: "Add Medical Records",
    href: "add-medical-records",
    icon: Receipt,
  },
  {
    title: "Messages",
    href: "chat",
    icon: MessageSquare,
  },

  {
    title: "Accounts",
    href: "accounts",
    icon: CreditCard,
  },
  {
    title: "Profile",
    href: "profile",
    icon: User,
  },
  {
    title: "Invoices",
    href: "invoices",
    icon: FileText,
    child: [
      {
        title: "Create Invoice",
        href: "create-invoice",
        icon: DollarSign,
      },

      {
        title: " Invoices List",
        href: "invoice-list",
        icon: Heart,
      },
    ],
  },

  {
    title: "Settings",
    href: "settings",
    icon: Settings,
  },

  {
    title: "Medical Details",
    href: "medical-details",
    icon: LucideShield,
  },
  {
    title: "Change Password",
    href: "change-password",
    icon: Lock,
  },
];
export const adminConfig: MenuItemProps[] = [
  // dashboard
  {
    isHeader: true,
    title: "Admin Dashboard",
  },
  {
    title: "Dashboard",

    icon: LayoutDashboard,

    child: [
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "dashboard",
      },
      {
        title: " Doctors",
        href: "doctors",
        icon: UserPlus,
      },
      {
        title: "Patients",
        href: "patients",
        icon: Receipt,
      },
      {
        title: "Appointments",
        href: "appointments",
        icon: CalendarDays,
      },
      {
        title: "Specialties",
        href: "specialties",
        icon: Users,
      },

      {
        title: "Reviews",
        href: "reviews",
        icon: MessageSquare,
      },

      {
        title: "Transactions",
        href: "transactions",
        icon: CreditCard,
      },
      {
        title: "Settings",
        href: "settings",
        icon: User,
      },

      {
        title: "Change Password",
        href: "change-password",
        icon: Lock,
      },
    ],
  },

  ...pagesRoutes,
];
export const pharmacyConfig: MenuItemProps[] = [
  {
    isHeader: true,
    title: "Menu",
  },

  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "dashboard",
  },

  {
    title: "Products",
    href: "products",
    icon: CalendarDays,
    child: [
      {
        title: "Products ",
        href: "products",
        icon: Heart,
        // multi_menu: [
        //   {
        //     title: "Active Products",
        //     href: "active-products",
        //     icon: Heart,
        //   },
        //   {
        //     title: "Inactive Products",
        //     href: "inactive-products",
        //     icon: Heart,
        //   },
        // ],
      },
      {
        title: "Add Product",
        href: "add-product",
        icon: DollarSign,
      },
      {
        title: "Out of Stock",
        href: "out-of-stock",
        icon: DollarSign,
      },
      {
        title: "Expired",
        href: "expired",
        icon: DollarSign,
      },
    ],
  },
  {
    title: "Categories",
    href: "categories",
    icon: Users,
  },
  {
    title: "Orders",
    href: "orders",
    icon: Heart,
  },

  {
    title: "Transactions",
    href: "transactions",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "settings",
    icon: User,
  },

  {
    title: "Change Password",
    href: "change-password",
    icon: Lock,
  },
];
