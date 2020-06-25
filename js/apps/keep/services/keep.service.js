import { Utils } from './util.service.js';

export const keepService = {
  getNotes,
  removeById,
  getEmptyNote,
  getById,
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
      url: 'http://some-img/me',
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

function getEmptyNote(type) {
  var newNote;
  switch (type) {
    case 'noteText':
      newNote = {
        id: Utils.getRandomId(),
        type: 'noteText',
        isPinned: false,
        info: { txt: '' },
      };
      break;
    case 'noteImg':
      // code block
      break;
    case 'noteTodos':
      // code block
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
