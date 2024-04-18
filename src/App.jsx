import { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = 'http://localhost:3001/api/notes'
import Nota from './components/nota.jsx'
import Header from "./components/Header.jsx";
import InputNota from "./components/InputNota.jsx";
const App = () => {
  
  //Uso de hook de estado para crear una nueva nota
  const [newNote, setNewNote] = useState("");
  //Uso de hook de estado para almacenar las notas
  const [notes, setNotes] = useState([]);
  //Uso de hook de efecto para realizar una solicitud a la API de backend de ExpressJS
  useEffect(() => {
    console.log("effect");
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };
  
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date().toISOString(),  // Formato ISO para compatibilidad con SQL
    };

    axios
      .post(baseUrl, noteObject)
      .then((response) => {
        console.log(response);
        setNotes(notes.concat(response.data))
        setNewNote("");
      });
  };

  return (
    <div>
      <Header/>
      <Nota nota={notes}/>
      <InputNota newNote={newNote} handleNoteChange={handleNoteChange} addNote={addNote}/>
      
    </div>
  );
};

export default App;
