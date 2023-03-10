import React from "react";
import { useSelector } from "react-redux";
import { selectParty } from "../../../redux/selectors";
import UpperCaseFirstLetter from "../../../Utils/UpperCaseFirstLetter.js";
import ConfirmDelete from "../../Modals/ConfirmDelete/ConfirmDelete";
import "./mapOverCurrentTeam.css";

const MapOverCurrentTeam = () => {
  const party = useSelector(selectParty);
  return (
    <div className="mapOverCurrentTeam">
      {party.map((pokemon, i) => {
        console.log(pokemon);
        return (
          <div key={i} className="mapOverCurrentTeamSinglePokemon">
            <ConfirmDelete
              nameThatIsBeingDeleted={UpperCaseFirstLetter(pokemon.name)}
              index={i}
              arrayToDeleteFrom={party}
              teamOrPokemon={"pokemon"}
              pokemonImage={pokemon.image.front_default}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MapOverCurrentTeam;
