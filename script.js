const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//promt to select media stream, pss to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch (error) {
        //catch error here
    }

}

button.addEventListener('click', async () => {
    //disable button
    button.disabled = true;
    //start picture
    await videoElement.requestPictureInPicture();
    //reset buttton
    button.disabled = false;

} );

//on load
selectMediaStream();