"use strict";


export const mailService = {
  getMails,
  removeById,
  saveEmail,
  getById,
  getEmailTemplate,
  calcNextId
};

var prevId = 101;
var currId = 0;

function storeToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
  let data = localStorage.getItem(key);
  return (data) ? JSON.parse(data) : undefined;
}

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
  var startingCounter = 0;
  if (startingCounter === 0) {
    console.log("hi!");
    storeToStorage('emails', gMails)

  }
  startingCounter++;
  return Promise.resolve(loadFromStorage('emails'));
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
    email.sentAt = getFormattedTime();
    gMails.unshift(email);
  }
  storeToStorage('emails', gMails)
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
  currId = prevId
  prevId++;
  return currId;
}

function getFormattedTime() {
  var currDate = new Date();

  var formatDate = '';
  formatDate += currDate.getFullYear();
  formatDate += '-0' + currDate.getMonth();
  formatDate += '-' + currDate.getDate();
  formatDate += ' ' + currDate.getHours();
  formatDate += ':' + currDate.getMinutes();
  console.log(currDate.toDateString());

  return formatDate;
}