const vid1 = document.querySelector(".vid-1");
const vid2 = document.querySelector(".vid-2");
const vid3 = document.querySelector(".vid-3");

const vids_h2 = document.querySelector(".vids-heading");
const vids_p = document.querySelector(".vids-text");
const vids_img = document.querySelector(".vids-img");

vid1.addEventListener("click",(e)=>{
    vids_h2.innerHTML = "Build and <br>create with AI"
    vids_p.innerHTML = "Instantly turn collateral into <br>research-driven experiences."
    vids_img.src = "images/vid1.gif"
})

vid2.addEventListener("click",(e)=>{
    vids_h2.innerHTML = "Learn in just <br>five minutes a day"
    vids_p.innerHTML = "Arist makes training digestible and conversational — <br>all with no loss of impact or depth. <br> It's like Duolingo for the enterprise."
    vids_img.src = "images/vid2.gif"
})

vid3.addEventListener("click",(e)=>{
    vids_h2.innerHTML = "Track impact <br>in real-time"
    vids_p.innerHTML = "Instantly identify knowledge and tactic gaps on a per-rep,<br> per-lesson, per-question, and per-cohort basis.<br> Fix gaps instantly."
    vids_img.src = "images/vid3.gif"
})