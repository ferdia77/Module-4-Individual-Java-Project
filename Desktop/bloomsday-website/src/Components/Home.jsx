import React from "react";
import Nav from "./Nav";
import Crowd from "../assets/Crowd.jpg";
import Scene from "../assets/Scene.jpg";
import Court from "../assets/Court.jpg";
import Courting from "../assets/Courting.jpg";
import girls from "../assets/girls.jpg";
import JoyceTower from "../assets/JoyceTower.jpg";
import Zurich from "../assets/Zurich.png";
import JJCentre from "../assets/James Joyce Centre.png";
import Failte from "../assets/Failte.png";
import DLR from "../assets/DLR.png"
import BlackrockBusiness from "../assets/BlackrockBusiness.png"
import BlackrockVillageC from "../assets/BlackrockVillageC.png"

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="sponsors">
          <img className="zurich" src={Zurich}/>
          <img className="jjcentre" src={JJCentre}/>
          <img className="failte" src={Failte}/>
          <img className="DLR" src={DLR}/>
          <img className="BlackrockBusiness" src={BlackrockBusiness}/>
          <img className="BlackRockVillage" src={BlackrockVillageC}/>
        </div>
        <h1 className="header__date">
        Ulysses aWake Monday June 16th 2025 6pm for Blackrock
        Bloomsday  @ Blackrock Village Shopping Centre
        </h1>
          <para className="para__description">
            Bringing drama, comedy, music and soul to the hearts of Blackrock in this adaptation of Joyce's
            original classic.
          </para>
        
      </div>
      <div className="photo__wrapper">
        <figure className="photos">
          <img className="crowd__photo" src={Crowd} alt="" />
        </figure>
        <figure className="photos">
          <img className="scene__photo" src={Scene} alt="" />
        </figure>
        <figure className="photos">
          <img className="court__photo" src={Court} alt="" />
        </figure>
      
        <figure className="photos">
          <img className="courting__photo" src={Courting} alt="" />
        </figure>
        <figure className="photos">
          <img className="girls__photo" src={girls} alt="" />
        </figure>
        <figure className="photos">
          <img className="joyceTower__photo" src={JoyceTower} alt="" />
        </figure>
      </div>

      <p className="credits">
        Adapted by Nastaise Leddy and Iris Park<br/>
        Theme Music: ‘All the Ghosts of
        Ulysses’ composed by Aidan Mulloy<br/> 
        Choreographed by Orla McFeely<br/>
        Music directed by Aidan Mulloy<br/> 
        Directed by Nastaise Leddy
      </p>
      
    </div>
  );
};

export default Home;
