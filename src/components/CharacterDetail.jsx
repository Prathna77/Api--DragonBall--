import { useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./list.css"

function CharacterDetail() {

    const [transformation, setTransformation] = useState([]);
    const [selectedTransformationImage, setSelectedTransformationImage] = useState("");
    const [selectedKi, setSelectedKi] = useState("")
    const { id } = useParams()
    const details = useLoaderData();

    useEffect(() => {

        fetch(`https://dragonball-api.com/api/characters/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTransformation(data.transformations || []);
                console.info(data);
            });

    }, [id]);

    const handleTransformationClick = (imageURL, ki) => {
        setSelectedTransformationImage(imageURL);
        setSelectedKi(ki)
    };

    return (

        <section>
            <h1 className="title-name">{details.name}</h1>
            {selectedKi !== null && (
                <h2 className="title-ki">{selectedKi}</h2>
            )}

            {details && (
                <div className="profil-character">
                    <img className="detail-character" src={selectedTransformationImage || details.image} alt={details.name} />
                </div>
            )}
            {transformation && (
                <div className="character-list-transformation">
                    {transformation.map((transformationMap) => (
                        <div key={transformationMap.id} >
                            <button onClick={() => handleTransformationClick(transformationMap.image,transformationMap.ki)}>
                                {transformationMap.name}
                            </button>
                        </div>
                    ))}

                </div>
            )}
        </section >
    )
}

export default CharacterDetail;