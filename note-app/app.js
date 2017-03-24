const Fs = require('fs');
const _ = require('lodash');
const Yargs = require('yargs');

const Notes = require('./notes')


const Argv = Yargs.argv;
let command = Argv._[0];

if(command === "add"){
  console.log("adding note");
  Notes.addNote(Argv.title, Argv.body) ? console.log("note added") : console.log("duplicate found")
}else if(command === "list"){
  console.log("listing notes");
  Notes.getAll(); 
}else if(command === "read"){
  console.log("reading note");
  let note = Notes.read(Argv.title); 
  debugger;
  console.log(note);
}else if(command === "remove"){
  console.log("removing note");
  Notes.remove(Argv.title); 
}else{
  console.log("Command not recognized");
}