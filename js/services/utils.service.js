'use strict';

export const Utils = {
    storeToStorage,
    loadFromStorage,
    getRandomInt,
    getRandomId,
    getFormattedTime
}

function storeToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}
function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}


function getRandomId() {
    var pt1 = Date.now().toString(16);
    var pt2 = getRandomInt(1000, 9999).toString(16);
    var pt3 = getRandomInt(1000, 9999).toString(16);
    return `${pt3}-${pt1}-${pt2}`.toUpperCase();
}

function getRandomInt(num1, num2) {
    var max = (num1 >= num2) ? num1 + 1 : num2 + 1;
    var min = (num1 <= num2) ? num1 : num2;
    return (Math.floor(Math.random() * (max - min)) + min);
}

function getFormattedTime() {
    var currDate = new Date();

    var formatDate = '';
    formatDate += currDate.getFullYear();
    formatDate += ' 0' + currDate.getMonth();
    formatDate += ' ' + currDate.getDate();
    formatDate += ' ' + currDate.getHours();
    formatDate += ':' + currDate.getMinutes();
<<<<<<< HEAD

=======
    console.log(currDate.toDateString());
  
>>>>>>> ba649625fcfc9387e2e5df46474acc9b6455a71d
    return formatDate;
}