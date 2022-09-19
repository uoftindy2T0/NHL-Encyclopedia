import SearchBar from "./Components/SearchBar";
import PlayerData from "./PlayerData.json";
import TeamData from "./TeamData.json";

function LandingPageSearchBars() {
    const style = {
        margin: "auto",
        padding: "0% 0% 0% 5%",
        color: "white"
    }
    return <div style={style}>
        <div className="rowC">
          <SearchBar placeholder="Enter a Player..." data={PlayerData} />
          <SearchBar placeholder="Enter a Team..." data={TeamData} />
        </div>
    </div>
}

function LandingFrameMessage() {

    const style = {
        margin: "auto",
        padding: "5% 30% 0% 5%",
        color: "white"
    }

    return <div style={style}>
        
        <div style={{"font-size": "80px"}}>
            NHL Player Encyclopedia
        </div>
        <br />
    </div>
}

function LandingFrame() {
    const style = {
        "background-image": `url("images/homepage_logo.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }

    return <div style={style}>
        <LandingFrameMessage />
        <LandingPageSearchBars />
    </div>
}

function HomePage() {
    return <div>
        <LandingFrame />
        
    </div>
}

export default HomePage