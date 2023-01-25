import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About"
import { Products } from "../pages/Products/Products";
import { AboutService } from "../pages/AboutService/AboutService";
import { Contact } from "../pages/Contact/Contact";
import { NotFound } from "../pages/NotFound/NotFound";
import { LayoutPublic } from "../Layout/LayoutPublic";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/nosotros',
                element: <About/>
            },
            {
                path: '/productos',
                element: <Products/>
            },
            {
                path: '/nuestros-servicios',
                element: <AboutService/>
            },
            {
                path: '/contactanos',
                element: <Contact/>
            }
        ]
    }
])