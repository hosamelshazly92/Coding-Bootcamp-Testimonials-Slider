let previous = document.getElementById("previous"),
    next = document.getElementById("next");

next.addEventListener("click", function () {
    let slide = document.getElementById("slide"),
        main = document.getElementById("main"),
        name = document.getElementById("name"),
        job = document.getElementById("job");

//    slide.style.backgroundImage = "url('images/image-john.jpg')";


});

previous.addEventListener("click", function () {
    let slide = document.getElementById("slide"),
        main = document.getElementById("main"),
        name = document.getElementById("name"),
        job = document.getElementById("job");

//    slide.style.backgroundImage = "url('images/image-tanya.jpg')";

    main.innerHTML = '"' + " I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. " + '"';

    name.innerHTML = "Tanya Sinclair";

    job.innerHTML = "UX Engineer";
});

