import React, { useState } from 'react';
import Home from './src/screens/Home';
import AddNote from './src/screens/AddNote';
import EditNote from './src/screens/EditNote';

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, editNote, selectedNote, setCurrentNote, deleteNote }) => {
  switch (currentPage) {
    case 'home':
      return <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage} //function setCurrentPage diberikan ke component Home
          setCurrentNote={setCurrentNote}
          deleteNote={deleteNote}
        />
    case 'add': //tambahkan function addNote ke component AddNote
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case 'edit':
      return (
      <EditNote
        setCurrentPage={setCurrentPage}
        editNote={editNote}
        selectedNote={selectedNote}
      />
      )
    default:
      return <Home />
  }
}


const App = () => {
  const [currentPage, setCurrentPage] = useState('home') //default ditetapkan sebagai Home
  const [selectedNote, setCurrentNote] = useState([]);
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: '#Note Pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 
    },
  ])

  //addNote function initialize
  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  //editNote function initialize
  const editNote = (id, title, desc) => {
      const updateNote = noteList.map(note => note.id === id ? { id, title, desc } : note )
      setNoteList(updateNote)
      setCurrentPage('home')//function auto back to home
  }

  //deleteNote function initialize
  const deleteNote = (id) => {
    const deleted = noteList.filter((note) => {
      return note.id !== id
    })
    setNoteList(deleted)
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      //tambahkan function addNote sebagai prop
      addNote={addNote}
      //tambahkan function editNote sebagai prop
      editNote={editNote}
      selectedNote={selectedNote}
      setCurrentNote={setCurrentNote}
      deleteNote={deleteNote}
    />
  )
}

export default App