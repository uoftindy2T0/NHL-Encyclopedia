import React, { useState, useEffect } from "react";
import PlayerData from "./PlayerData.json";
import Headshot from "./brock-nelson.jpg";
import "./player.css"

function StatsTable(){
    const [sampleObject, setSampleObject] = useState({});

    useEffect(() => {let sampleObject = PlayerData.find(e => e.id === "bn2000");
        setSampleObject(sampleObject);
      }, []);
    
      return <div>
        <div style={{"font-size": "18px", padding: "0% 0% 0% 2%"}}>
          <span style={{fontWeight: 'bold'}}>Games Played:</span> {sampleObject.games}
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>Goals:</span> {sampleObject.goals}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>Assists:</span> {sampleObject.assists}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>Points:</span> {sampleObject.points}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>ATOI:</span> {sampleObject.atoi}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>5-on-5 CF%:</span> {sampleObject.cfpercent}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>5-on-5 HDCF%:</span> {sampleObject.hdcfpercent}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>OZS%:</span> {sampleObject.ozspercent}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>Goal Share%:</span> {sampleObject.goalshare}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>Point Share%:</span> {sampleObject.pointshare}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>GF:</span> {sampleObject.gf}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>GA:</span> {sampleObject.ga}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>GF%:</span> {sampleObject.gfpercent}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>xGF:</span> {sampleObject.xgf}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>xGA:</span> {sampleObject.xga}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>xGF%:</span> {sampleObject.xgfpercent}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>PP TOI:</span> {sampleObject.pptoi}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>PP Goals:</span> {sampleObject.ppgoal}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>PP Assists:</span> {sampleObject.ppassist}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>PP Points:</span> {sampleObject.pppoint}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>PP GF:</span> {sampleObject.ppgf}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>PP xGF:</span> {sampleObject.ppxgf}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>PK TOI:</span> {sampleObject.pktoi}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>PK GA:</span> {sampleObject.pkga}
        </div>
        <div style={{"font-size": "18px"}}>
            <span style={{fontWeight: 'bold'}}>PK xGA:</span> {sampleObject.pkxga}
        </div>
      </div>
  </div>
}

function JuniorScoutingReport() {

    const [sampleObject, setSampleObject] = useState({});
    const style = {
        margin: "auto",
        padding: "1% 0% 0% 1%",
        color: "black"
        }

    useEffect(() => {let sampleObject = PlayerData.find(e => e.id === "bn2000");
        setSampleObject(sampleObject);
      }, []);
    return <div style={style}>
        <div style={{"font-size": "20px"}}>
            <span style={{fontWeight: 'bold'}}>Junior Scouting Report</span>
        </div>
        <div style={{"font-size": "20px"}}>
            {sampleObject.juniorSR}
        </div>
    </div>
}

function CurrentScoutingReport() {

    const [sampleObject, setSampleObject] = useState({});
    const style = {
        margin: "auto",
        padding: "0% 0% 0% 1%",
        color: "black"
        }

    useEffect(() => {let sampleObject = PlayerData.find(e => e.id === "bn2000");
        setSampleObject(sampleObject);
      }, []);
    return <div style={style}>
        <div style={{"font-size": "20px"}}>
            <span style={{fontWeight: 'bold'}}>Current Scouting Report</span>
        </div>
        <div style={{"font-size": "20px"}}>
            {sampleObject.currentSR}
        </div>
    </div>
}

function PlayerInfoLandingFrame() {

    const [sampleObject, setSampleObject] = useState({});
    const style = {
        margin: "auto",
        color: "black"
        }

    useEffect(() => {let sampleObject = PlayerData.find(e => e.id === "bn2000");
        setSampleObject(sampleObject);
      }, []);
    return <div style={style}>
        <div style={{"font-size": "40px"}}>
            <span style={{fontWeight: 'bold'}}>{sampleObject.name}</span>
        </div>
        <div style={{"font-size": "20px"}}>
            {sampleObject.team}
        </div>
        <div style={{"font-size": "20px"}}>
            {sampleObject.position} - {sampleObject.height}, {sampleObject.weight}
        </div>
        <div style={{"font-size": "20px"}}>
        <span style={{fontWeight: 'bold'}}>Shoots:</span> {sampleObject.shoots}
        </div>
        <div style={{"font-size": "20px"}}>
        <span style={{fontWeight: 'bold'}}>Birthday:</span> {sampleObject.dob} ({sampleObject.age})
        </div>
        <div style={{"font-size": "20px"}}>
        <span style={{fontWeight: 'bold'}}>Hometown:</span> {sampleObject.hometown}
        </div>
        <div style={{"font-size": "20px"}}>
        <span style={{fontWeight: 'bold'}}>Cap Hit:</span> {sampleObject.caphit}
        </div>
        <div style={{"font-size": "20px"}}>
        <span style={{fontWeight: 'bold'}}>Contract Expiry:</span> {sampleObject.contractexpiry}
        </div>
    </div>
}

export default function LandingFrame() {
    return (
        <div className="rowC">
        <div>
            <img src={Headshot} alt="profile pic" height = {350} width = {275}/>
            <PlayerInfoLandingFrame />
        </div> 
        <div className = "srboxed" style = {{"padding": "1% 1% 1% 1%"}}>
            <CurrentScoutingReport />
            <JuniorScoutingReport /> 
        </div>
        <div className = "statsboxed" style = {{"padding": "1% 1% 1% 1%"}}><StatsTable /> </div> 
        </div>
    );
}