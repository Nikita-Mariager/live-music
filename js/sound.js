const imgTag = document.getElementById("vidsound");
const videoHtml = document.getElementById("myvid");

imgTag.src = "gfx/soundoff.svg";
let count = 1;

function changeImg(){
    if(videoHtml.muted){

    imgTag.src = "gfx/soundon.svg";

    videoHtml.muted = false; 
    }

    else{
        imgTag.src = "gfx/soundoff.svg";

        videoHtml.muted = true;
    }

}