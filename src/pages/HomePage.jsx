import { Link } from "react-router-dom";
import homePageDbz from "../assets/image/homepageDbz.jpg"

function HomePage() {

    return (

        <section className="title-home">
            <img className="img-homepage"src={homePageDbz} />
            <div className="button-homepage">
            <Link to={"/dragonball/character"}>
                <button>CHARACTER</button>
            </Link>
            <Link to={"/dragonball/planet"}>
                <button>PLANET</button>
            </Link>
            </div>
        </section>
    );
}

export default HomePage;