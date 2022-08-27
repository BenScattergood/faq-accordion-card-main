document.querySelectorAll(".question").forEach((question) => question.addEventListener("click", () => {
    // if(question.parentNode.lastElementChild.classList.contains("active")) {
    //     question.parentNode.classList.toggle("active")
    // }

    // else {
    //     document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove("active"))
    //     question.parentNode.classList.add("active")
    // }
    let answer = question.parentNode.lastElementChild;

    if(answer.classList.contains("answer")) {
        answer.classList.remove("answer");
    }

    else {
        answer.classList.add("answer");
    }
    
    question.firstElementChild.classList.toggle('active');
}))


// document.querySelector(".question").addEventListener("click", (this.id) => {
//     let answer = document.getElementById(this.id).parentNode.lastElementChild;
//     answer.classList.toggle('answer');
// })


// function result(id) {
//     // let toggleAble = document.querySelector('.answer');
//     // toggleAble.classList.toggle('answer');

    
// }