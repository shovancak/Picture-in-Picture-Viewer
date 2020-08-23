const videoElement = document.getElementById("video");
const buttonElement = document.getElementById("button");

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Something wen wrong:", error);
  }
};

buttonElement.addEventListener("click", async () => {
  buttonElement.disabled = true;
  await videoElement.requestPictureInPicture();
  buttonElement.disabled = false;
});

selectMediaStream();
