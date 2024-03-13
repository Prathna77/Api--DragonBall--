import { useLoaderData } from "react-router-dom";
import "./list.css"

function PlanetDetail() {

    const details = useLoaderData();

    return (
        <section>
            {details && (
                <div className="profil-planet">
                    <img className="detail-planet" src={details.image} />
                    <p className="description-planet">{details.description}</p>

                </div>
            )
            }
        </section >
    )
}

export default PlanetDetail;