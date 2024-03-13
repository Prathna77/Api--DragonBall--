import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard.jsx";
import BouleDeCrystal from "../assets/image/bouleCrystal.png"
import "../components/list.css"


function CharacterByList() {

    const [itemCharacter, setItemCharacter] = useState([]);
    const [linkCharacter, setLinkCharacter] = useState();
    const [metaCharacter, setMetaCharacter] = useState();


    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters')
            .then((res) => res.json())
            .then((data) => {
                setItemCharacter(data.items)
                setLinkCharacter(data.links)
                setMetaCharacter(data.meta)
                console.info(data)
            })
    }, []);

    // Fonction pour gérer le changement de page
    const handlePageChange = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setItemCharacter(data.items);
                setLinkCharacter(data.links);
                setMetaCharacter(data.meta);
                console.info(data);
            });
    };

    return (
        <section>
            <h1 className="title-page-character"> CHARACTER </h1>
            <div className="character-list" >
                {itemCharacter.map((characterMap) => (
                    <div key={characterMap.id}>
                        <CharacterCard character={characterMap} />
                    </div>
                ))}
            </div>
            {
                linkCharacter && (
                    <div className="pagination-buttons">
                        <button onClick={() => handlePageChange(linkCharacter.first)}>Première Page</button>
                        <button onClick={() => handlePageChange(linkCharacter.previous)}>Précédent</button>
                        <img src={BouleDeCrystal} className="boule-crystal-pagination" />
                        <button onClick={() => handlePageChange(linkCharacter.next)}>Suivant</button>
                        <button onClick={() => handlePageChange(linkCharacter.last)}>Dernière Page</button>
                    </div>
                )
            }
            {
                metaCharacter && (
                    <div className="meta-info">
                        <p>Total d&#39;éléments : {metaCharacter.totalItems}</p>
                        <p>Page actuelle : {metaCharacter.currentPage}</p>
                    </div>
                )
            }
        </section >
    );
}

export default CharacterByList;