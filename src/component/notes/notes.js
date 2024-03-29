import React, { useContext, useEffect, useRef, useState } from "react";
import { noteContext } from "../../context/notes/noteContext";
import NoteItem from "./noteItem/noteItem";
import AddNote from "../addNote/addNote";
import UpdateNoteCom from "../updateNote/updateNote";
import { useNavigate } from "react-router-dom";

function Notes(props) {
  const context = useContext(noteContext);
  const { notes, getNote } = context;
  const ref = useRef();
  let history = useNavigate();
  const [note, setNote] = useState({
    id: " ",
    etitle: "",
    edescription: "",
    etag: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNote();
    } else {
      history("/login");
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = (note) => {
    if (ref.current) {
      ref.current.click();
    }
    setNote({
      id: note._id,
      etitle: note.title,
      edescription: note.description,
      etag: note.tag,
    });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="col-12">
      <AddNote showAlert={props.showAlert} />

      <UpdateNoteCom
        ref={ref}
        showAlert={props.showAlert}
        note={note}
        onChange={onChange}
      />

      <div className="row my-3">
        <h2>Your Notes</h2>
        {/* {notes.length === 0 && (
          <p className="text-muted">No Notes to Display</p>
        )} */}
        {notes.length > 0 ? (
          notes.map((value) => {
            return (
              <div className="col-3" key={value._id}>
                <NoteItem
                  value={value}
                  updateNote={updateNote}
                  showAlert={props.showAlert}
                />
              </div>
            );
          })
        ) : (
          <p className="text-muted">No Notes to Display</p>
        )}
      </div>
    </div>
  );
}

export default Notes;
