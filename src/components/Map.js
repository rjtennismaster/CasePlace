import React from "react";
import places from "./locations.json";
import GoogleMapReact from "google-map-react";
import * as ButtonTitle from "../util/ButtonTitles.js";
import Accordion from "./Accordion";
import "../styles/ToolTip.scss";
import "../styles/Radio.scss";
import {
  Bandage,
  Barbell,
  Bus,
  FastFood,
  Home,
  Pin,
  School,
} from "react-ionicons";

const RadioButton = ({ buttonValue, buttonTitle }) => {
  return (
    <div className={"radioButton"}>
      <input type="radio" value={buttonValue} name="select" />{" "}
      <text className="radios"> {buttonTitle} </text>
    </div>
  );
};

const Map = ({ loc, setLoc, curStudent }) => {
  const [currentToolTip, setCurrentToolTip] = React.useState(null);
  const cwruBlue = "#0A304E";

  const ToolTip = ({ name, address, info }) => (
    <div className={"toolTip"}>
      <h1 className={"toolTipName"}>{name}</h1>
      <p className={"toolTipAddress"}>{address}</p>
      <p className={"toolTipInfo"}>{info}</p>
      <a
        href={
          "https://www.google.com/maps/search/?api=1&query=cwru+" +
          name.replace(" ", "+")
        }
      >
        See in Google Maps
      </a>
    </div>
  );

  const directory = places.map((data) => {
    //category - Directory
    if (data.category === ButtonTitle.CampusSeeking && data.deptMarker === "")
      return (
        <div lat={data.latitude} lng={data.longitude}>
          <Pin
            lat={data.latitude}
            lng={data.longitude}
            color={cwruBlue}
            height="25px"
            width="25px"
            onClick={() => {
              setCurrentToolTip(data.name);
            }}
          />
          {currentToolTip === data.name && (
            <ToolTip
              lat={data.latitude}
              lng={data.longitude}
              name={data.name}
              address={data.address}
              info={data.info}
            ></ToolTip>
          )}
        </div>
      );
    if (
      data.category === ButtonTitle.CampusSeeking &&
      data.deptMarker === "housing"
    )
      return (
        <div lat={data.latitude} lng={data.longitude}>
          <Home
            lat={data.latitude}
            lng={data.longitude}
            color={cwruBlue}
            height="25px"
            width="25px"
            onClick={() => {
              setCurrentToolTip(data.name);
            }}
          />
          {currentToolTip === data.name && (
            <ToolTip
              lat={data.latitude}
              lng={data.longitude}
              name={data.name}
              address={data.address}
              info={data.info}
            ></ToolTip>
          )}
        </div>
      );
    if (
      data.category === ButtonTitle.CampusSeeking &&
      data.deptMarker === "CAS"
    )
      return (
        <div lat={data.latitude} lng={data.longitude}>
          <School
            lat={data.latitude}
            lng={data.longitude}
            color={"green"}
            height="25px"
            width="25px"
            onClick={() => {
              setCurrentToolTip(data.name);
            }}
          />
          {currentToolTip === data.name && (
            <ToolTip
              lat={data.latitude}
              lng={data.longitude}
              name={data.name}
              address={data.address}
              info={data.info}
            ></ToolTip>
          )}
        </div>
      );
    if (
      data.category === ButtonTitle.CampusSeeking &&
      data.deptMarker === "CSE"
    )
      return (
        <div lat={data.latitude} lng={data.longitude}>
          <School
            lat={data.latitude}
            lng={data.longitude}
            color={"red"}
            height="25px"
            width="25px"
            onClick={() => {
              setCurrentToolTip(data.name);
            }}
          />
          {currentToolTip === data.name && (
            <ToolTip
              lat={data.latitude}
              lng={data.longitude}
              name={data.name}
              address={data.address}
              info={data.info}
            ></ToolTip>
          )}
        </div>
      );
    if (
      data.category === ButtonTitle.CampusSeeking &&
      data.deptMarker === "phed"
    )
      return (
        <div lat={data.latitude} lng={data.longitude}>
          <Barbell
            lat={data.latitude}
            lng={data.longitude}
            color={cwruBlue}
            height="25px"
            width="25px"
            onClick={() => {
              setCurrentToolTip(data.name);
            }}
          />
          {currentToolTip === data.name && (
            <ToolTip
              lat={data.latitude}
              lng={data.longitude}
              name={data.name}
              address={data.address}
              info={data.info}
            ></ToolTip>
          )}
        </div>
      );
    if (
      data.category === ButtonTitle.CampusSeeking &&
      data.deptMarker === "health"
    )
      return (
        <div lat={data.latitude} lng={data.longitude}>
          <Bandage
            lat={data.latitude}
            lng={data.longitude}
            color={cwruBlue}
            height="25px"
            width="25px"
            onClick={() => {
              setCurrentToolTip(data.name);
            }}
          />
          {currentToolTip === data.name && (
            <ToolTip
              lat={data.latitude}
              lng={data.longitude}
              name={data.name}
              address={data.address}
              info={data.info}
            ></ToolTip>
          )}
        </div>
      );
    if (
      data.category === ButtonTitle.CampusSeeking &&
      data.deptMarker === "business"
    )
      return (
        <div lat={data.latitude} lng={data.longitude}>
          <School
            lat={data.latitude}
            lng={data.longitude}
            color={cwruBlue}
            height="25px"
            width="25px"
            onClick={() => {
              setCurrentToolTip(data.name);
            }}
          />
          {currentToolTip === data.name && (
            <ToolTip
              lat={data.latitude}
              lng={data.longitude}
              name={data.name}
              address={data.address}
              info={data.info}
            ></ToolTip>
          )}
        </div>
      );
  });

  const food = places.map((data) => {
    if (data.category === ButtonTitle.FoodSeeking)
      return (
        <div lat={data.latitude} lng={data.longitude}>
          <FastFood
            lat={data.latitude}
            lng={data.longitude}
            color={cwruBlue}
            height="25px"
            width="25px"
            onClick={() => {
              setCurrentToolTip(data.name);
            }}
          />
          {currentToolTip === data.name && (
            <ToolTip
              lat={data.latitude}
              lng={data.longitude}
              name={data.name}
              address={data.address}
              info={data.info}
            ></ToolTip>
          )}
        </div>
      );
  });

  const studentServices = places.map((data) => {
    if (data.category === ButtonTitle.StudentServicesSeeking)
      return (
        <div lat={data.latitude} lng={data.longitude}>
          <School
            lat={data.latitude}
            lng={data.longitude}
            color={cwruBlue}
            height="25px"
            width="25px"
            onClick={() => {
              setCurrentToolTip(data.name);
            }}
          />
          {currentToolTip === data.name && (
            <ToolTip
              lat={data.latitude}
              lng={data.longitude}
              name={data.name}
              address={data.address}
              info={data.info}
            ></ToolTip>
          )}
        </div>
      );
  });

  const healthServices = places.map((data) => {
    if (data.category === ButtonTitle.HealthServicesSeeking)
      return (
        <div lat={data.latitude} lng={data.longitude}>
          <Bandage
            lat={data.latitude}
            lng={data.longitude}
            color={cwruBlue}
            height="25px"
            width="25px"
            onClick={() => {
              setCurrentToolTip(data.name);
            }}
          />
          {currentToolTip === data.name && (
            <ToolTip
              lat={data.latitude}
              lng={data.longitude}
              name={data.name}
              address={data.address}
              info={data.info}
            ></ToolTip>
          )}
        </div>
      );
  });

  const transportation = places.map((data) => {
    if (data.category === ButtonTitle.TransportationSeeking)
      return (
        <div lat={data.latitude} lng={data.longitude}>
          <Bus
            lat={data.latitude}
            lng={data.longitude}
            color={cwruBlue}
            height="25px"
            width="25px"
            onClick={() => {
              setCurrentToolTip(data.name);
            }}
          />
          {currentToolTip === data.name && (
            <ToolTip
              lat={data.latitude}
              lng={data.longitude}
              name={data.name}
              address={data.address}
              info={data.info}
            ></ToolTip>
          )}
        </div>
      );
  });

  const radioHandle = (event) => {
    setLoc(event.target.value);
    // #TODO: Use this to set initial radio button???
  };

  return (
    <div className={"mapPage"}>
      <div className="radioDiv" onChange={radioHandle}>
        {/* #TODO: Connect the rest of these buttons */}
        {/*Category Directory*/}
        <RadioButton
          buttonTitle={"Directory"}
          buttonValue={ButtonTitle.CampusSeeking}
        />
        {/*Category: Food*/}
        <RadioButton
          buttonTitle={"Food"}
          buttonValue={ButtonTitle.FoodSeeking}
        />

        {/*Category Student Services*/}
          {curStudent &&
        <RadioButton
          buttonTitle={"Student Services"}
          buttonValue={ButtonTitle.StudentServicesSeeking}
        />}

        {/*Category Health Services*/}
          { curStudent &&
        <RadioButton
          buttonTitle={"Health Services"}
          buttonValue={ButtonTitle.HealthServicesSeeking}
        />}

        {/*Category Transportation*/}
        <RadioButton
          buttonTitle={"Transportation"}
          buttonValue={ButtonTitle.TransportationSeeking}
        />

        {/*Add a button for Category Research  */}
      </div>
      <div className={"mapScreen"}>
        {/*#TODO: Hide API key*/}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBqiKidu6V4PTb8YZJdQET9qVjYTWFSG1o" }}
          defaultCenter={{ lat: 41.508186, lng: -81.608665 }}
          defaultZoom={17}
          onClick={() => setCurrentToolTip(null)}
        >
          {loc === ButtonTitle.CampusSeeking && directory}
          {loc === ButtonTitle.FoodSeeking && food}
          {loc === ButtonTitle.StudentServicesSeeking && studentServices}
          {loc === ButtonTitle.HealthServicesSeeking && healthServices}
          {loc === ButtonTitle.TransportationSeeking && transportation}
        </GoogleMapReact>
        <Accordion pins={places?.filter((x) => x.category === loc)} />
      </div>
    </div>
  );
};

export default Map;
