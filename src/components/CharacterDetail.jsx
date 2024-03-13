import { useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./list.css"

function CharacterDetail() {

    const [transformations, setTransformations] = useState([]);
    const [selectedTransformationImage, setSelectedTransformationImage] = useState("");
    const { id } = useParams()
    const details = useLoaderData();

    useEffect(() => {

        fetch(`https://dragonball-api.com/api/characters/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTransformations(data.transformations || []);
                console.info(data);
            });

    }, [id]);

    const handleTransformationClick = (imageURL) => {
        setSelectedTransformationImage(imageURL);
    };

    return (

        <section>
            <h1 className="title-name">{details.name}</h1>
            {details && (
                <div className="profil-character">
                    <img className="detail-character" src={selectedTransformationImage || details.image} alt={details.name} />
                </div>
            )}
            {transformations && (
                <div className="character-list-transformation">
                    {transformations.map((transformationMap) => (
                        <button key={transformationMap.id} onClick={() => handleTransformationClick(transformationMap.image)}>
                            {transformationMap.name}
                        </button>
                    ))}
    
                </div>
            )}
        </section >
    )
}

export default CharacterDetail;