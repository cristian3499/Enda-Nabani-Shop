import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export const LayoutPublic = () =>{
    return(
        <>
            <Header/>
                <main>
                    <Outlet/>
                </main>
            <Footer/>
        </>
    )
}