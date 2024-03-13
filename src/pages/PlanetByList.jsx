import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BouleDeCrystal from "../assets/image/bouleCrystal.png"
import "../components/list.css"

function PlaneBytList() {

    const [itemPlanet, setItemPLanet] = useState([]);
    const [linkPlanet, setLinkPlanet] = useState();
    const [metaPlanet, setMetaPlanet] = useState();

    useEffect(() => {
        fetch("https://dragonball-api.com/api/planets")
            .then((res) => res.json())
            .then((data) => {
                setItemPLanet(data.items)
                setLinkPlanet(data.links)
                setMetaPlanet(data.meta)
                console.info(data)
            })
    }, []);

    // Fonction pour gérer le changement de page
    const handlePageChange = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setItemPLanet(data.items);
                setLinkPlanet(data.links);
                setMetaPlanet(data.meta);
                console.info(data);
            });
    };

    return (
        <section>
            <h1 className="title-page-character"> PLANET </h1>
            <div className="planet-list">
                {itemPlanet.map((planetMap) => (
                    <Link key={planetMap.id} to={`/dragonball/planet/${planetMap.id}`} >
                        <p className="title-planet">{planetMap.name}</p>
                        <img src={planetMap.image}
                            className="detail-planet-list" />
                    </Link>
                ))
                }
            </div>
            {linkPlanet && (
                <div className="pagination-buttons">
                    <button onClick={() => handlePageChange(linkPlanet.previous)}>Précédente</button>
                    <img className="boule-crystal-pagination" src={BouleDeCrystal} />
                    <button onClick={() => handlePageChange(linkPlanet.next)}>Suivante</button>
                </div>
            )}
            {metaPlanet && (
                <div className="meta-info">
                    <p>Total d&#39;éléments : {metaPlanet.totalItems}</p>
                    <p>Page actuelle : {metaPlanet.currentPage}</p>
                </div>
            )}

        </section>
    );
}

export default PlaneBytList;