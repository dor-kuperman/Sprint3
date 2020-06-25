"use strict";

export const keepService = {
  getNotes,
  removeById,
};

var gNotes = [
  {
    id: 101,
    type: "NoteText",
    isPinned: true,
    info: { txt: "Fullstack Me Baby!" },
  },
  {
    id: 102,
    type: "NoteImg",
    info: {
      url: "http://some-img/me",
      title: "Me playing Mi",
    },
    style: { backgroundColor: "#00d" },
  },
  {
    id: 103,
    type: "NoteTodos",
    info: {
      label: "How was it:",
      todos: [
        { txt: "Do that", doneAt: null },
        { txt: "Do this", doneAt: 187111111 },
      ],
    },
  },
];

function getNotes() {
  return Promise.resolve(gNotes);
}

function removeById(id) {
    const idx = gNotes.findIndex(currNote => currNote.id === id)
    gNotes.splice(idx, 1);
}
