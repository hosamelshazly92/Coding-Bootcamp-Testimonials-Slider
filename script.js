let next = document.getElementById("next"),
    previous = document.getElementById("previous");

next.addEventListener("click", function () {
    let image1 = document.querySelector(".image-1"),
        image2 = document.querySelector(".image-2");

    image1.style.display = "none";
    image2.style.display = "inline-block";

    let main1 = document.querySelector("#main-1"),
        main2 = document.querySelector("#main-2");

    main1.style.display = "none";
    main2.style.display = "block";

    let name1 = document.querySelector("#name-1"),
        name2 = document.querySelector("#name-2");

    name1.style.display = "none";
    name2.style.display = "inline-block";

    let job1 = document.querySelector("#job-1"),
        job2 = document.querySelector("#job-2");

    job1.style.display = "none";
    job2.style.display = "inline-block";
});
