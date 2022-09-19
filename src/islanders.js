import React from "react";
import PlayerData from "./PlayerData.json";
import "./islanders.css";

const TeamPageHeader = () => {
  return (
    <header className="header">
      <h2>New York Islanders</h2>
    </header>
  );
};

export const Islanders = () => {
    return (
      <>
        <TeamPageHeader />
        <div className="player-container">
          {PlayerData.map((data, key) => {
            return (
              <div key={key}>
                <PlayerTable
                id = {data.id}
                team = {data.team}
                name = {data.name}
                position = {data.position}
                height = {data.height}
                weight = {data.weight}
                shoots = {data.shoots}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  };

const PlayerTable = ({ id, team, name, position, height, weight }) => {
    if (team === "New York Islanders") return (
      <table>
        <tbody>
          <tr>
            <td>
            <a href={"http://localhost:3000/"+id}><h3>{name}</h3></a>
            </td>
            <td>
              <p>{position}</p>
            </td>
            <td>
              <p>{height}</p>
            </td>
            <td>
              <p>{weight}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  
export default Islanders;