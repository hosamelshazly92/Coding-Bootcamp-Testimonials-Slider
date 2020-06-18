let previous = document.getElementById("previous"),
    next = document.getElementById("next");

next.addEventListener("click", function() {
    let slide = document.getElementById("slide"),
        main = document.getElementById("main"),
        name = document.getElementById("name"),
        job = document.getElementById("job");
    
    slide.style.backgroundImage = "url('images/image-john.jpg')";
    
    main.innerHTML = '"' + " If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructions go into is incredible. I now feel so confident about starting up as a professional developer. " + '"' ;
    
    name.innerHTML = "John Tarkpor"; 
    
    job.innerHTML = "Junior Front-end Developer";
});

previous.addEventListener("click", function() {
    let slide = document.getElementById("slide"),
        main = document.getElementById("main"),
        name = document.getElementById("name"),
        job = document.getElementById("job");
    
    slide.style.backgroundImage = "url('images/image-tanya.jpg')";
    
    main.innerHTML = '"' + " I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. " + '"' ;
    
    name.innerHTML = "Tanya Sinclair"; 
    
    job.innerHTML = "UX Engineer";
});

//console.log(next);
