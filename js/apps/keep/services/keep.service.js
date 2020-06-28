import { Utils } from './util.service.js';

export const keepService = {
  getNotes,
  removeById,
  getEmptyNote,
  getById,
  saveNote,
};
var gNotes = (() => {
  var notes = Utils.loadFromStorage('notes');
  if (!notes) {
      notes = _createDefaultNotes();
      Utils.storeToStorage('notes', notes);
  }
  return notes;
})();

function _createDefaultNotes(){

  return [
    {
      id: Utils.getRandomId(),
      type: 'noteText',
      isPinned: true,
      info: { txt: 'We LoVue!' },
    },
    {
      id: Utils.getRandomId(),
      type: 'noteImg',
      info: {
        url: '../img/pic1.jpg',
        title: 'Me playing Mi',
      },
      style: { backgroundColor: '#00d' },
    },
    {
      id: Utils.getRandomId(),
      type: 'noteTodos',
      info: {
        label: 'Daily tasks:',
        todos: [
          { txt: 'Eat();', doneAt: null },
          { txt: 'Sleep();', doneAt: null },
          { txt: 'Code();', doneAt: null },
          { txt: 'Repeat();', doneAt: null }
        ],
      },
    },
    {
      id: Utils.getRandomId(),
      type: 'noteImg',
      info: {
        url: '../img/pic2.jpg',
        title: 'Me playing Mi',
      },
      style: { backgroundColor: '#00d' },
    },
  ];
}

function getNotes() {
  return Promise.resolve(gNotes);
}

function removeById(id) {
  const idx = gNotes.findIndex((currNote) => currNote.id === id);
  gNotes.splice(idx, 1);
  Utils.storeToStorage('notes', gNotes)
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
  Utils.storeToStorage('notes', gNotes)
  return Promise.resolve(note);
}

