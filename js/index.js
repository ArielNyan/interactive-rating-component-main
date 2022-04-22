const rating = document.querySelectorAll(".btn");
const submit = document.querySelector('.box__btn');
const box = document.querySelector('.show');
const box2 = document.querySelector('.hide');
const selected = document.querySelector('.selected');

rating.forEach((rating) => {
    rating.addEventListener("click", (e) => {
        rating.classList.add('active')
        let number = e.target.value;
        submit.addEventListener("click", () => {
            selected.innerHTML = `${number}`;
            box.classList.remove('show')
            box.classList.add('hide')
            box2.classList.remove('hide')
            box2.classList.add('show')
        })
    });
});


