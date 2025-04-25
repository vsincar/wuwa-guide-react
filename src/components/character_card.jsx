// CharacterCard.jsx - tıklanabilir kart
import { useNavigate } from "react-router-dom";

function CharacterCard({ char }) {
  const navigate = useNavigate();
  const rarityClass = char.rarity === 5 ? "rarity_five" : "rarity_four";
  const rarityImgPath = `/${rarityClass}.png`;
  const weaponIcon = `/weapon-icons/weapon_${char.weapon.toLowerCase()}.webp`;
  const elementTypeClass = char.elementTypeName.toLowerCase();

  // Karta tıklama işlevi
  const handleCardClick = () => {
    navigate(`/character/${char.id}`); // URL'de karakter ID'sini kullanıyoruz
  };

  const renderRoles = () => {
    const roleList = char.roles.split(", ");
    return roleList.map((role, index) => (
      <span key={index} className={role}>
        {role}
      </span>
    ));
  };

  return (
    <div
      className={`char-card ${rarityClass}`}
      onClick={handleCardClick}
      style={{ cursor: "pointer" }} // Tıklanabilir olduğunu belirtmek için imleç ekledik
    >
      <img
        className="char-img"
        src={char.image}
        width="200px"
        height="280px"
        alt={char.name}
      />

      <div className={`char-element-type ${elementTypeClass}`}>
        <img
          src={char.elementType}
          width="25px"
          height="25px"
          className="char-element-icon"
          alt={`${char.name} element`}
        />
      </div>
      <span className={`char-element-name ${elementTypeClass}`}>
        {char.elementTypeName}
      </span>

      <div className="char-info">
        <div className="char-name">{char.name}</div>
        <img src={rarityImgPath} className="char-rarity-img" alt="Rarity" />
        <div className="char-weapon-type">
          <img
            src={weaponIcon}
            id="char-img"
            width="25px"
            height="25px"
            alt={`${char.name} weapon`}
          />
          <span className="char-weapon-name">{char.weapon}</span>
        </div>
        <div className="char-roles">{renderRoles()}</div>
      </div>
    </div>
  );
}

export default CharacterCard;
