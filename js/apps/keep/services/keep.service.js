import { Utils } from './util.service.js';

export const keepService = {
  getNotes,
  removeById,
  getEmptyNote,
  getById,
  saveNote,
};

var gNotes = [
  {
    id: 101,
    type: 'noteText',
    isPinned: true,
    info: { txt: 'Fullstack Me Baby!' },
  },
  {
    id: 102,
    type: 'noteImg',
    info: {
      url: '../img/pic1.jpg',
      title: 'Me playing Mi',
    },
    style: { backgroundColor: '#00d' },
  },
  {
    id: 103,
    type: 'noteTodos',
    info: {
      label: 'How was it:',
      todos: [
        { txt: 'Do that', doneAt: null },
        { txt: 'Do this', doneAt: 187111111 },
      ],
    },
  },
];

function getNotes() {
  return Promise.resolve(gNotes);
}

function removeById(id) {
  const idx = gNotes.findIndex((currNote) => currNote.id === id);
  gNotes.splice(idx, 1);
}

function getEmptyNote(type, inputTxt) {
  var newNote;
  switch (type) {
    case 'noteText':
      newNote = {
        id: '',
        type: 'noteText',
        isPinned: false,
        info: { 
          txt: inputTxt },
      };
      break;
    case 'noteImg':
      newNote = {
        id: '',
        type: 'noteImg',
        info: {
          url: '',
          title: '',
        },
        style: { backgroundColor: '#00d' },
      };
      break;
    case 'noteTodos':
      newNote = {
        id: '',
        type: 'noteTodos',
        info: {
          label: '',
          todos: [
            { txt: '', doneAt: null },
            { txt: '', doneAt: null },
          ],
        },
      };
      break;
    default:
    // code block
  }
  return newNote;
}

function getById(noteId) {
  const note = gNotes.find((note) => note.id === noteId);
  return Promise.resolve(note);
}

function saveNote(note) {
  if (note.id) {
    const idx = gNotes.findIndex((currNote) => currNote.id === note.id);
    gNotes.splice(idx, 1, note);
  } else {
    note.id = Utils.getRandomId();
    note.createdAt = Date.now();
    gNotes.unshift(note);
  }
  return Promise.resolve(note);
}
