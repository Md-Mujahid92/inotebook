import { createContext, useState } from "react";

export const noteContext = createContext();

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);

  // Get All Note
  const getNote = async () => {
    //api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxMTM5OWEyOTJmZDY4ODExY2I1NGZlIn0sImlhdCI6MTY5NTYyNzY3NH0.iGWmZDpgFc71tYsVLiwDqHPmnP1tVW9-N5R7L3QLEUQ",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    let url = `${host}/api/notes/addnote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxMTM5OWEyOTJmZDY4ODExY2I1NGZlIn0sImlhdCI6MTY5NTYyNzY3NH0.iGWmZDpgFc71tYsVLiwDqHPmnP1tVW9-N5R7L3QLEUQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = async (id) => {
    // API Call
    let url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxMTM5OWEyOTJmZDY4ODExY2I1NGZlIn0sImlhdCI6MTY5NTYyNzY3NH0.iGWmZDpgFc71tYsVLiwDqHPmnP1tVW9-N5R7L3QLEUQ",
      },
    });
    const json = await response.json();
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    let url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxMTM5OWEyOTJmZDY4ODExY2I1NGZlIn0sImlhdCI6MTY5NTYyNzY3NH0.iGWmZDpgFc71tYsVLiwDqHPmnP1tVW9-N5R7L3QLEUQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    // Logic to edit in client
    let newNotes = await JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < newNotes.length; i++) {
      const item = newNotes[i];
      if (item._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
