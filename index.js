let listVideo = document.querySelectorAll(".video-list .vid");
let mainVideo = document.querySelector(".main-video .video");
let title = document.querySelector(".main-video .title");

// Selecting the Next Video
listVideo.forEach(video=>{
    video.addEventListener('click',()=>{
       const priorVideo = document.querySelector(".video-list .active");
       priorVideo.classList.remove("active");
       video.classList.add("active"); 
       const src = video.children[0].src;
       mainVideo.children[0].src=src;
       title.innerText = video.querySelector(".title").innerText;
       video.addEventListener("mouseover",()=>{
        console.log('mouse is over the video element');
        video.querySelector("video").play();
        });
        video.addEventListener("mouseout",()=>{
            console.log('mouse has left the video element');
            video.querySelector("video").pause();
            });
    });
});

// playing the video


