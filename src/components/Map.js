import React from "react";
import places from "./locations.json";
import GoogleMapReact from "google-map-react";
import * as ButtonTitle from "../util/ButtonTitles.js";
import Accordion from "./Accordion";

const Map = ({ loc, setLoc }) => {
  const cwruBlue = "#0A304E";
  // #TODO: Clean up this file
  // #TODO: Change up categories - Discuss with group

  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const locations = places.map((data) => {
    return (
      <AnyReactComponent
        lat={data.latitude}
        lng={data.longitude}
        text={data.name}
      />
    );
  });

  const engineering = places.map((data) => {
    if (data.category === "CSE")
      return (
        <AnyReactComponent
          lat={data.latitude}
          lng={data.longitude}
          text={data.name}
        />
      );
  });

  const business = places.map((data) => {
    if (data.category === "Business")
      return (
        <AnyReactComponent
          lat={data.latitude}
          lng={data.longitude}
          text={data.name}
        />
      );
  });

  const arts = places.map((data) => {
    if (data.category === "CAS")
      return (
        <AnyReactComponent
          lat={data.latitude}
          lng={data.longitude}
          text={data.name}
        />
      );
  });

  const housing = places.map((data) => {
    if (data.category === "Housing")
      return (
        <AnyReactComponent
          lat={data.latitude}
          lng={data.longitude}
          text={data.name}
        />
      );
  });

  const food = places.map((data) => {
    if (data.category === "Food")
      return (
        <AnyReactComponent
          lat={data.latitude}
          lng={data.longitude}
          text={data.name}
        />
      );
  });

  const medical = places.map((data) => {
    if (data.category === "Medical")
      return (
        <AnyReactComponent
          lat={data.latitude}
          lng={data.longitude}
          text={data.name}
        />
      );
  });

  const phys = places.map((data) => {
    if (data.category === "Phys")
      return (
        <AnyReactComponent
          lat={data.latitude}
          lng={data.longitude}
          text={data.name}
        />
      );
  });

  const services = places.map((data) => {
    if (data.category === "Services")
      return (
        <AnyReactComponent
          lat={data.latitude}
          lng={data.longitude}
          text={data.name}
        />
      );
  });

  const radioHandle = (event) => {
    setLoc(event.target.value);
    // #TODO: Use this to set initial radio button???
  };

  return (
    <div>
      {/*<div style={{backgroundColor: cwruBlue}}>*/}
      {/*    <customRadioButton inValue={"Test"} inName = {"select"} inSetLoc ={setLoc}></customRadioButton> Test*/}
      {/*</div>*/}
      <div onChange={radioHandle}>
        {/* #TODO: Connect the rest of these buttons */}
        <input type="radio" value="Housing" name="select" /> Housing
        <input
          type="radio"
          value={ButtonTitle.FoodSeeking}
          name="select"
        />{" "}
        Food
        <input type="radio" value="Medical" name="select" /> Medical
        <input type="radio" value="Phys" name="select" /> Phys
        <input type="radio" value="Services" name="select" /> Services
        <input type="radio" value="Business" name="select" /> Business
        <input type="radio" value="CSE" name="select" /> Engineering
        <input type="radio" value="CAS" name="select" /> Arts and Sciences
      </div>
      <div style={{ height: "100vh", width: "100%" }}>
        {/*#TODO: Hide API key*/}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBqiKidu6V4PTb8YZJdQET9qVjYTWFSG1o" }}
          defaultCenter={{ lat: 41.508186, lng: -81.608665 }}
          defaultZoom={17}
        >
          {loc === "All" && locations}
          {loc === "CSE" && engineering}
          {loc === "Business" && business}
          {loc === "CAS" && arts}
          {loc === "Housing" && housing}
          {loc === ButtonTitle.FoodSeeking && food}
          {loc === "Medical" && medical}
          {loc === "Phys" && phys}
          {loc === "Services" && services}
        </GoogleMapReact>
        <Accordion pins={places?.filter((x) => x.category === loc)} />
      </div>
    </div>
  );
};

export default Map;
