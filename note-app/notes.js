const Fs = require('fs');

let fetchNotes = () =>{
  try{
    return JSON.parse(Fs.readFileSync("notes-data.json"))
  }catch(e){
    return []; 
  }
},
saveNotes = (notes) => {
  Fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let addNote = (title, body ) => {
  console.log("add note", title, body);

  let notes = fetchNotes(); 
  let note = {title, body};
  let duplicates = notes.filter((note) => note.title === title); 
  
  if(duplicates.length === 0){
    notes.push(note);
    saveNotes(notes);
    return notes; 
  }
}; 

let getAll = () => {
  console.log("Getting all notes");
  return fetchNotes();
};

let read = (title) =>{
  console.log("Getting one note", title);
  let notes = fetchNotes(); 
  let foundNote = notes.filter((note) => note.title === title )
  return foundNote.length !== 0 ? foundNote[0] : "Note not found";
};

let remove = (title) => {
  console.log('Deleting Note', title);
  notes = fetchNotes(); 
  let filteredNotes = notes.filter((note) => note.title !== title);
  filteredNotes.length === notes.length ? console.log("note not found") : saveNotes(filteredNotes);

};

module.exports = {
  addNote,
  getAll,
  remove,
  read
};