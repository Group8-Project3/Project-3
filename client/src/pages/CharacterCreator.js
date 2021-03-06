import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import AbilityScores from "../components/AbilityScores/AbilityScores";
import AttributeList from "../components/AttributeList/AttributeList";
import CharacterBlock from "../components/CharacterBlock/CharacterBlock";
import CharacterName from "../components/CharacterName/CharacterName";
import axios from "axios";


function CharacterCreator() {
  const [dndClass, setDndClass] = useState("Fighter");
  const [race, setRace] = useState("Human");
  const [dice, setDice] = useState("");
  const [strength, setStrength] = useState("18");
  const [dexterity, setDexterity] = useState("18");
  const [constitution, setConstitution] = useState("18");
  const [intelligence, setIntelligence] = useState("18");
  const [wisdom, setWisdom] = useState("18");
  const [charisma, setCharisma] = useState("18");
  const [charName, setCharName] = useState("J'DINKALAGE MORGOONE");
  const [equipment, setEquipment] = useState("");
 
  const classes = [
    "Cleric",
    "Fighter",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
  ];

  const onSubmit = (e) => {
    const AC = document.getElementById('armorClass').innerHTML;
    const HP = document.getElementById('hitPoints').innerHTML;
    const savingThrows = document.getElementById('savingThrows').innerHTML;
    const equipment = document.getElementById('equipment').innerHTML;
    e.preventDefault();
    const charData = {
      name: charName,
      race: race,
      class: dndClass,
      strength: strength,
      dexterity: dexterity,
      constitution: constitution,
      intelligence: intelligence,
      wisdom: wisdom,
      charisma: charisma,
      equipment: equipment, 
      armor: AC,
      HP: HP,    
      savingThrows: savingThrows
    };
    axios
      .post("/api/character", charData)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response)
      });
  };

  const raceList = ["Human", "Elf", "Dwarf", "Halfling", "Gnome", "Dragonborn"];
  return (
    <>
      <Navbar />
      <CharacterName setCharName={ setCharName }/>
      <CharacterBlock
        attributeList={ classes }
        selectedClass={ dndClass }
        selectedRace={ race }
        strength={ strength }
        dexterity={ dexterity }
        constitution={ constitution }
        intelligence={ intelligence }
        wisdom={ wisdom }
        charisma={ charisma }
        charName={ charName }
        equipment={ equipment }
        setEquipment={ setEquipment }
      />
      <AttributeList
        attributeList={ classes}
        setAttribute={ setDndClass }
        title="Classes"
      />
      <AttributeList
        attributeList={ raceList }
        setAttribute={ setRace }
        title="Race"
      />
      <AbilityScores
        setStrength={ setStrength }
        setDexterity={ setDexterity }
        setConstitution={ setConstitution }
        setIntelligence={ setIntelligence }
        setDice={ setDice }
        setWisdom={setWisdom}
        setCharisma={setCharisma}
        strength={ strength }
        dexterity={ dexterity }
        constitution={ constitution }
        intelligence={ intelligence }
        wisdom={ wisdom }
        charisma={ charisma }
        />
      <button className="createBtn" block size="lg" onClick={onSubmit} type="submit">
        Save Character!
      </button>
    </>
  );
}

export default CharacterCreator;
