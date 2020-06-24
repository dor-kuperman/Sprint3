'use strict';

export const mailService = {
    getMails
}

var gMails = [
    {
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: Date.now()
    }

]

function getMails() {
    return Promise.resolve(gMails);
}
