var notes = [];

var title = 1;

var note1 = {
    title: 1,
    body: 'A'
}

var note2 = {
    title: 2,
    body: 'B'
}

var note3 = {
    title: 1,
    body: 'C'
}

notes.push(note1);
notes.push(note2);
notes.push(note3);

var duplicateNotes = notes.filter((note) => note.title === title);

console.log(duplicateNotes);


console.log(notes);