import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import ButtonModal from "./components/ButtonModal";
import * as ButtonTitle from "./util/ButtonTitles.js";

function App() {
  // #TODO: Assign into local storage to prevent refire
  const [modalSelection, setModalSelection] = useState("Welcome");
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showProspySeekingModal, setShowProspySeekingModal] = useState(false);
  const [showStudentSeekingModal, setShowStudentSeekingModal] = useState(false);
  const [showGuestSeekingModal, setShowGuestSeekingModal] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (modalSelection) {
      case ButtonTitle.ProspyWelcome:
        setShowProspySeekingModal(true);
        break;
      case ButtonTitle.GuestWelcome:
        setShowGuestSeekingModal(true);
        break;
      case ButtonTitle.CurrentStudentWelcome:
        setShowStudentSeekingModal(true);
        break;
      case "":
        setShowWelcomeModal(true);
        break;
      default:
        // Eventually we want default to go to the map
        setShowWelcomeModal(true);
    }
  }, [modalSelection]);

  const modalActive =
    showWelcomeModal ||
    showProspySeekingModal ||
    showGuestSeekingModal ||
    showStudentSeekingModal;

  return (
    <div className={"App"}>
      <div className={modalActive ? "dim-background" : ""} />
      {showWelcomeModal && (
        <ButtonModal
          modalTitle={"I am a"}
          setShowModal={setShowWelcomeModal}
          buttonTitles={[
            ButtonTitle.ProspyWelcome,
            ButtonTitle.GuestWelcome,
            ButtonTitle.CurrentStudentWelcome,
          ]}
          setModalSelection={setModalSelection}
        />
      )}

      {showProspySeekingModal && (
        <ButtonModal
          modalTitle={"What Would You Like to Do?"}
          setShowModal={setShowProspySeekingModal}
          buttonTitles={[
            ButtonTitle.CampusSeeking,
            ButtonTitle.FoodSeeking,
            ButtonTitle.DirectionsSeeking,
            ButtonTitle.TransportationSeeking,
          ]}
          setModalSelection={setModalSelection}
        />
      )}

      {showStudentSeekingModal && (
        <ButtonModal
          modalTitle={"I'm looking for"}
          setShowModal={setShowStudentSeekingModal}
          buttonTitles={[
            ButtonTitle.CampusBuildingSeeking,
            ButtonTitle.ClubsSeeking,
            ButtonTitle.HealthServicesSeeking,
            ButtonTitle.StudentServicesSeeking,
            ButtonTitle.ShoppingSeeking,
            ButtonTitle.StudySeeking,
          ]}
          setModalSelection={setModalSelection}
        />
      )}

      {showGuestSeekingModal && (
        <ButtonModal
          modalTitle={"What Would You Like to Do?"}
          setShowModal={setShowGuestSeekingModal}
          buttonTitles={[
            ButtonTitle.CampusSeeking,
            ButtonTitle.FoodSeeking,
            ButtonTitle.DirectionsSeeking,
            ButtonTitle.TransportationSeeking,
          ]}
          setModalSelection={setModalSelection}
        />
      )}
    </div>
  );
}

export default App;