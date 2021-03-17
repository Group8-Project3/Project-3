import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AbilityScores from "../components/AbilityScores/AbilityScores";
import AttributeList from "../components/AttributeList/AttributeList";
import CharacterBlock from "../components/CharacterBlock/CharacterBlock";
import Class from "../components/Class/Class";

function CharacterCreator() {
  const classes = [
    "Cleric",
    "Fighter",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
  ];
  const skills = [
    "Acrobatics",
    "Animal",
    "Arcana",
    "Athletics",
    "Deception",
    "History",
    "Insight",
    "Intimidation",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Persuasion",
    "Religion",
    "Sleight",
    "History",
    "Stealth",
    "Survival",
  ];
  const race = ["Human", "Elf", "Dwarf", "Half", "Gnome"];
  return (
    <>
      <Navbar />
      <CharacterBlock />
      <Class/>
      <AttributeList attributes={race} title="Race" />
      <AbilityScores />
      <AttributeList attributes={skills} title="Skills" />
    </>
  );
}

export default CharacterCreator;
