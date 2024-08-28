import HomeTop from "./Sections/HomeTop/page";
import HelloAndWelcome from "./Sections/HelloAndWelcome/page";
import AllVegetables from "./Sections/AllVegetables/page";
import TopStores from "./Sections/TopStores/page";
import Restuarants from "./Sections/Restaurants/page";
import Contact from "./Sections/Contact/page";
import Footer from "./Sections/Footer/page";

const page = () => {
    return (
        <div>
            <HomeTop />
            <HelloAndWelcome />
            <AllVegetables />
            <TopStores />
            <Restuarants />
            <Contact />
            <Footer />
        </div>
    )
}
export default page