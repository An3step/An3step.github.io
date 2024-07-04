let video = document.getElementsByTagName('video')[0]
// console.log(video)
video.onended = function(){
    // console.log('ended')
    video.hidden = true;
}