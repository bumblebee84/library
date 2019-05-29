import {Student} from "./student";

function Controller(opt) {
    let start_button = opt.startButton;
    start_button.addEventListener('click', this.onStartButtonClick);

    let search_button = opt.searchButton;
    search_button.addEventListener('click', this.onSearchButtonClick);

}

Controller.prototype.onStartButtonClick = function () {
    let el = document.getElementById('student');
    let childs = el.childNodes;
    for (let i = childs.length - 1; i >= 0; i--) {
        el.removeChild(childs[i]);
    }

    let student_list = [
        {id: '001', name: 'xf'},
        {id: '002', name: 'lr'},
        {id: '003', name: 'ldg'}
    ];
    let rand = Math.ceil(Math.random() * 3);

    switch (rand) {
        case 1:
            new Student(student_list[0]);
            break;
        case 2:
            new Student(student_list[0]);
            new Student(student_list[1]);
            break;
        default:
            new Student(student_list[0]);
            new Student(student_list[1]);
            new Student(student_list[2]);
    }
};

Controller.prototype.onSearchButtonClick = function () {
    alert(2)
};



export {Controller};