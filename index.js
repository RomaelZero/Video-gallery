//index.js file -
document.addEventListener("DOMContentLoaded", function() {
    let listVideo = document.querySelectorAll(".video-list .vid");
    let mainVideo = document.querySelector(".main-video video");
    let title = document.querySelector(".main-video .title");

    // Selecting the Next Video
    listVideo.forEach(video => {
        video.addEventListener('click', () => {
            if (!video.classList.contains("active")) {
                const priorVideo = document.querySelector(".video-list .active");
                priorVideo.classList.remove("active");
                video.classList.add("active");
                const src = video.querySelector("video").src; // Check this line
                console.log(src); // Add this line for debugging
                mainVideo.src = src;
                title.innerText = video.querySelector(".title").innerText;
            }
        });

        // Add event listeners for playing and pausing the videos
        video.addEventListener("mouseover", () => {
            console.log('mouse is over the video element');
            video.querySelector("video").play();
        });

        video.addEventListener("mouseout", () => {
            console.log('mouse has left the video element');
            video.querySelector("video").pause();
        });
    });
});
