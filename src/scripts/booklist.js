function BookList(book) {

    let random = Math.ceil(Math.random() * 2);
    let bookl = this.getRandomArrayElements(book, random);
    for(let i=0;i<random;i++){
        this.name = bookl[i].name;
        this.tag = bookl[i].tag;
        this.alt = bookl[i].alt;
        this.src = bookl[i].src;
        this.text = bookl[i].text;
        this.make();
    }



}


BookList.prototype.make = function () {

    let newBookDiv = document.createElement('div');
    document.getElementById('book').appendChild(newBookDiv);
    newBookDiv.classList.add('column', 'card', 'book');

    let newBookImgDiv = document.createElement('div');
    newBookDiv.appendChild(newBookImgDiv);
    newBookImgDiv.classList.add('card-image');

    let newBookFigure = document.createElement('figure');
    newBookImgDiv.appendChild(newBookFigure);
    newBookFigure.classList.add('image', 'is-4by3');

    let newBookImg = document.createElement('img');
    newBookFigure.appendChild(newBookImg);
    newBookImg.classList.add('book-pic');
    newBookImg.src = this.src;
    newBookImg.alt = this.alt;

    let newBookContent = document.createElement('div');
    newBookDiv.appendChild(newBookContent);
    newBookContent.classList.add('card-content');

    let newBookMediaDiv = document.createElement('div');
    newBookContent.appendChild(newBookMediaDiv);
    newBookMediaDiv.classList.add('media');

    let newBookMediaContentDiv = document.createElement('div');
    newBookMediaDiv.appendChild(newBookMediaContentDiv);
    newBookMediaContentDiv.classList.add('media-content');

    let p1 = document.createElement('p');
    newBookMediaContentDiv.appendChild(p1);
    p1.classList.add('title', 'is-size-5');
    p1.innerText = this.name;

    let p2 = document.createElement('p');
    newBookMediaContentDiv.appendChild(p2);
    p2.classList.add('tag');
    p2.innerText = this.tag;

    let span = document.createElement('span');
    newBookMediaContentDiv.appendChild(span);
    span.innerHTML = '&nbsp;';

    let p3 = document.createElement('p');
    newBookMediaContentDiv.appendChild(p3);
    p3.classList.add('tag');
    p3.innerText = this.tag;

    let newBookBookContent = document.createElement('div');
    newBookContent.appendChild(newBookBookContent);
    newBookBookContent.classList.add('content', 'book-content');
    newBookBookContent.innerText = this.text;

};
BookList.prototype.getRandomArrayElements = function (arr, count) {
    let bookArr = arr.slice(0);
    let temp;
    let min = bookArr.length - count;
    for (let i = bookArr.length - 1; i > 0; i--) {
        let index = Math.floor(Math.random() * i + 1);
        temp = bookArr[index];
        bookArr[index] = bookArr[i];
        bookArr[i] = temp;
    }

    return bookArr.slice(min);
};
export {BookList};