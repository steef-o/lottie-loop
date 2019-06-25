"use strict";

const htmlCollection = document.querySelectorAll('#list li');

const list = [...htmlCollection];

list.map((listItem, index) => {
    listItem.addEventListener('click', (e, el) =>
    { animate(e) })
});

function animate(e, el) {
    console.log('event', el);
}

list.indexOf(htmlCollection.childNodes,)

Array.prototype.indexOf.call(squareList.childNodes, target)