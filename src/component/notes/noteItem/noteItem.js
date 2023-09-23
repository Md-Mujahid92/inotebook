import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { noteContext } from "../../../context/notes/noteContext";

function NoteItem(props) {
  const { value, updateNote, showAlert } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;

  return (
    <div>
      <div className="card my-2">
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <h5 className="card-title">{value.title}</h5>
            </div>
            <div className="col-4 text-end">
              <FontAwesomeIcon
                className="mx-2 text-end"
                style={{ cursor: "pointer" }}
                icon={faTrash}
                onClick={() =>
                  deleteNote(
                    value._id,
                    showAlert("Deleted Succefully", "success")
                  )
                }
              />

              <FontAwesomeIcon
                className="mx-2"
                style={{ cursor: "pointer" }}
                icon={faEdit}
                onClick={() => updateNote(value)}
              />
            </div>
          </div>
          <p className="card-text">{value.description}</p>
          <p className="card-text text-muted">{value.tag}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
