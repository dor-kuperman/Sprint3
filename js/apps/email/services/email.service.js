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
    sentAt: getFormattedTime(),
    id: 101,
    recipient: 'Rotem Yosef'
  },
  {
    subject: "Second",
    body: "This is the second mail, its true",
    isRead: true,
    sentAt: getFormattedTime(),
    id: 102,
    recipient: 'Dor Kuperman'
  },
  {
    subject: "Third",
    body: "This is the third mail",
    isRead: false,
    sentAt: getFormattedTime(),
    id: 103,
    recipient: 'Avivos'
  },
];

function getMails() {
  return Promise.resolve(gMails);
}

function removeById(id) {
  const idx = gMails.findIndex(currEmail => currEmail.id === id)
  console.log(idx);

  gMails.splice(idx, 1);
  return;
}

function saveEmail(email) {
  if (email.id) {
    const idx = gMails.findIndex(currmgMails => currmgMails.id === email.id)
    gMails.splice(idx, 1, email)
  } else {
    email.id = calcNextId();
    email.sentAt = getFormattedTime();
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
    sentAt: 0,
    id: 0
  };
}

function calcNextId() {
  const currLastId = gMails[gMails.length - 1].id;
  return currLastId + 1;
}

function getFormattedTime() {
  var currDate = new Date();

  var formatDate = '';
  formatDate += currDate.getDate();
  formatDate += '-' + currDate.getMonth();
  formatDate += '-' + currDate.getFullYear();
  formatDate += ' ' + currDate.getHours();
  formatDate += ':' + currDate.getMinutes();

  return formatDate;
}