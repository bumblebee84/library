function Student(student_list) {
    this.id = student_list.id;
    this.name = student_list.name;

    this.make();
}

Student.prototype.onBorrowBooksClick = function () {
    
};


Student.prototype.onReturnBooksClick = function () {

};


Student.prototype.make = function () {
    let newStudentDiv = document.createElement('div');
    document.getElementById('student').appendChild(newStudentDiv);
    newStudentDiv.classList.add('column', 'card', 'student');

    let newStudentHeader = document.createElement('header');
    newStudentDiv.appendChild(newStudentHeader);
    newStudentHeader.classList.add('card-header');

    let newStudentP = document.createElement('p');
    newStudentHeader.appendChild(newStudentP);
    newStudentP.classList.add('card-header-title');
    newStudentP.innerText = '学生卡';

    let newDivDiv = document.createElement('div');
    newStudentDiv.appendChild(newDivDiv);
    newDivDiv.classList.add('card-content');

    let newDivDivDiv = document.createElement('div');
    newDivDiv.appendChild(newDivDivDiv);
    newDivDivDiv.classList.add('content');

    let newDivDivDivDiv1 = document.createElement('div');
    newDivDivDiv.appendChild(newDivDivDivDiv1);

    let span_id = document.createElement('span');
    newDivDivDivDiv1.appendChild(span_id);
    span_id.innerText = 'ID';

    let span_id_show = document.createElement('span');
    newDivDivDivDiv1.appendChild(span_id_show);
    span_id_show.classList.add('span_id_show');

    let newDivDivDivDiv2 = document.createElement('div');
    newDivDivDiv.appendChild(newDivDivDivDiv2);

    let span_name = document.createElement('span');
    newDivDivDivDiv2.appendChild(span_name);
    span_name.innerText = '姓名';

    let span_name_show = document.createElement('span');
    newDivDivDivDiv2.appendChild(span_name_show);
    span_name_show.classList.add('span_name_show');

    let newDivDivDivDiv3 = document.createElement('div');
    newDivDivDiv.appendChild(newDivDivDivDiv3);

    let span_book = document.createElement('span');
    newDivDivDivDiv3.appendChild(span_book);
    span_book.innerText = '所借图书书名';

    let span_book_show = document.createElement('span');
    newDivDivDivDiv3.appendChild(span_book_show);
    span_book_show.classList.add('span_book_show');
    span_book_show.innerText = '未借书';

    let newDivDivDivDiv4 = document.createElement('div');
    newDivDivDiv.appendChild(newDivDivDivDiv4);

    let span_rate = document.createElement('span');
    newDivDivDivDiv4.appendChild(span_rate);
    span_rate.innerText = '读书进度';

    let progress_show = document.createElement('progress');
    newDivDivDivDiv4.appendChild(progress_show);
    progress_show.classList.add('progress_show', 'progress');
    progress_show.setAttribute('value', '15');
    progress_show.setAttribute('max', '100');

    let footer = document.createElement('footer');
    newStudentDiv.appendChild(footer);
    footer.classList.add('card-footer');

    let footer_a1 = document.createElement('a');
    footer.appendChild(footer_a1);
    footer_a1.classList.add('card-footer-item', 'borrow_Button');
    footer_a1.innerText = '借书';
    footer_a1.addEventListener('click', this.onBorrowBooksClick);

    let footer_a2 = document.createElement('a');
    footer.appendChild(footer_a2);
    footer_a2.classList.add('card-footer-item', 'return_Button');
    footer_a2.innerText = '还书';
    footer_a2.addEventListener('click', this.onReturnBooksClick);


    span_id_show.innerText = this.id;
    span_name_show.innerText = this.name;


};

export {Student};