import React from "react";
import Notes from "../notes/notes";

function Home(props) {
  const { showAlert } = props;
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-12">
          <Notes showAlert={showAlert} />
        </div>
      </div>
    </div>
  );
}

export default Home;
