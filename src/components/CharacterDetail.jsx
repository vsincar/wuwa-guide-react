import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CharacterDetail.css";
import characters from "./charData.js";

const CharDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const character = characters.find((char) => char.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!character) {
    return <div>Error! Could not find the character.</div>;
  }

  // elementTypeName'e göre arkaplan class'ı belirle
  const elementClass = character.elementTypeName.toLowerCase() + "-detail-page";

  return (
    <div className={`chardetailcontainer ${elementClass}`}>
      <button onClick={() => navigate(-1)} className="chardetailbackButton">
        ← Go Back
      </button>

      <div className="chardetailimgcontainer">
        <img
          src={character.image}
          alt={character.name}
          className="chardetailimg"
        />
        <img
          src={character.elementType}
          alt={character.elementTypeName}
          className="chardetailelementIcon"
        />
      </div>
      <h1 className="chardetailname">{character.name}</h1>

      <div className="chardetailinfo">
        <p>
          <strong>Element Type:</strong> {character.elementTypeName}
        </p>
        <p>
          <strong>Roles:</strong> {character.roles}
        </p>
        <p>
          <strong>Rarity:</strong> {character.rarity}★
        </p>
        <p>
          <strong>Weapon:</strong> {character.weapon}
        </p>
      </div>
    </div>
  );
};

export default CharDetail;
