import Error from "../components/error"
import { Gallery } from "../components/gallery"
import { Navbar } from "../components/navbar"
import { Writting } from "../components/writting"
export default function Page(){
    return(<>
        <Navbar></Navbar>
        <Writting></Writting>
        <Gallery></Gallery>
        </>
    )
}