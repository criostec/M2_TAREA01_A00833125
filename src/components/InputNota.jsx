import React from "react";
const estiloForm = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
  };
const estiloBoton = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  };


function InputNota({newNote, handleNoteChange, addNote}) {
    return (
        <form style={estiloForm} onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button style={estiloBoton} type="submit">save</button>
      </form>
    );
}

export default InputNota;