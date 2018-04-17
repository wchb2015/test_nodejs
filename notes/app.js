console.log('Starting app.js;');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');


// var user = os.userInfo();
// console.log(`Hello ${user.username}`);
// console.log(notes.age);

// fs.appendFileSync('greeting.txt','hello 20180415');

// var res = notes.addNote();
// console.log(res);

// var b = _.isString(21);
// console.log(b);

// console.log(process.argv);

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    // allNotes.forEach(element => {
    //     notes.logNote(element);
    // });

    allNotes.forEach(element => notes.logNote(element));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}