import React, {useContext} from "react";
import context from '../MyContext';
import '../assets/css/galeria.css';
import Heart from "../components/Heart";
import Galeria from "../components/Galeria";

export default function Favoritos() {
  const {photos, setPhotos} = useContext(context);

  const handleOnClick = (id) => {
    photos.find((element, index) => {
      if(element.id === id) {
        photos[index].liked = !photos[index].liked;
      }
    });
    setPhotos([...photos]);
  };
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {photos.map(photo =>
          {return (photo.liked ? (
            <div className="foto"
            key={photo.id}
            style={{backgroundImage: `url(${photo.src.tiny})`}}
            onClick={() => {
              handleOnClick(photo.id);
            }}>
              <Heart filled={photo.liked}/>
              <p>{photo.alt}</p>
              </div>
          ): ('')
          )})}
      </div>
    </div>
  );
}
