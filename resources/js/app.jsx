import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "../css/app.css";
import Home from "./pages/Home";
import About from "./pages/PageAbout";
import Contact from "./pages/Pagecontact";
import Faq from "./pages/PageFaq";
import Pricing from "./pages/PagePricing";
import Projects from "./pages/PageProjectGrid";
import ProjectDetails from "./pages/PageProjectDetails";
import Services from "./pages/PageServiceGrid";
import ServiceDetails from "./pages/PageServiceDetails";
import Team from "./pages/PageTeamGrid";
import TeamDetails from "./pages/PageTeamDetails";
import Testimonial from "./pages/PageTestimonial";
import NewsGrid from "./pages/PageNewsGrid";
import NewsDetails from "./pages/PageNewsDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/team",
    element: <Team/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/team-details",
    element: <TeamDetails/>,
  },
  {
    path: "/pricing",
    element: <Pricing/>,
  },
  {
    path: "/testimonial",
    element: <Testimonial/>,
  },
  {
    path: "/faq",
    element: <Faq/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },
  {
    path: "/service-details",
    element: <ServiceDetails/>,
  },
  {
    path: "/agences",
    element: <Projects/>,
  },
  {
    path: "/agence-details",
    element: <ProjectDetails/>,
  },
  {
    path: "/news-grid",
    element: <NewsGrid/>,
  },
  {
    path: "/news-details",
    element: <NewsDetails/>,
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);