"use strict";

export const mailService = {
  getMails,
  removeById,
  saveEmail,
  getById,
  getEmailTemplate,
  calcNextId
};

var gMails = [
  {
    subject: "First",
    body: "This is the first mail",
    isRead: false,
    sentAt: Date.now(),
    id: 101
  },
  {
    subject: "Second",
    body: "This is the second mail, its true",
    isRead: true,
    sentAt: Date.now(),
    id: 102
  },
  {
    subject: "Third",
    body: "This is the third mail",
    isRead: false,
    sentAt: Date.now(),
    id: 103
  },
];

function getMails() {
  return Promise.resolve(gMails);
}

function removeById(id) {
  const idx = gMails.findIndex(currEmail => currEmail.id === id)
  gMails.splice(idx, 1);
}

function saveEmail(email) {
  if (email.id) {
      const idx = gMails.findIndex(currmgMails => currmgMails.id === email.id)
      gMails.splice(idx, 1, email)
  } else {
      email.id = calcNextId();
      email.sentAt = Date.now();
      gMails.unshift(email);
  }
  return Promise.resolve(email);
}

function getById(emailId) {
  const email = gMails.find(email => email.id === emailId)
  return Promise.resolve(email)
}

function getEmailTemplate() {
  return {
    subject: '',
    body: '',
    isRead: false,
    sentAt: Date.now(),
    id: 0
  };
}

function calcNextId() {
  const currLastId = gMails[gMails.length - 1].id;
  return currLastId;
  }