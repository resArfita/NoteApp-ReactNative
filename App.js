import React, { useState } from 'react';
import Home from './src/screens/Home';
import AddNote from './src/screens/AddNote';
import EditNote from './src/screens/EditNote';

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, }) => {
  switch (currentPage) {
    case 'home':
      return <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage} //function setCurrentPage diberikan ke component Home
        />
    case 'add': //tambahkan function addNote ke component AddNote
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case 'edit':
      return <EditNote />
    default:
      return <Home />
  }
}


const App = () => {
  const [currentPage, setCurrentPage] = useState('home') //default ditetapkan sebagai Home

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: '#Note Pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 
    },
  ])

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


  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      //tambahkan function addNote sebagai prop
      addNote={addNote}
    />
  )
}

export default App