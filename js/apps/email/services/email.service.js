"use strict";

export const mailService = {
  getMails,
};

var gMails = [
  {
    subject: "First",
    body: "This is the first mail",
    isRead: false,
    sentAt: Date.now(),
  },
  {
    subject: "Second",
    body: "This is the second mail, its true",
    isRead: true,
    sentAt: Date.now(),
  },
  {
    subject: "This is the third mail",
    body: "This is the third mail",
    isRead: false,
    sentAt: Date.now(),
  },
];

function getMails() {
  return Promise.resolve(gMails);
}
