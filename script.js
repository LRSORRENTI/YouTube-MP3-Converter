// // const { dlAudio } = require("youtube-exec");
// import { dlAudio } from "youtube-exec";

// const field = document.getElementById('myForm').addEventListener('submit', function(event) {
//   console.log(1)
//   event.preventDefault(); // Prevent form submission
//   var inputText = document.getElementById('myInput').value;
//   console.log('Input:', inputText);
//   // Use the inputText variable as needed

//   dlAudio({
//     url: inputText,
//     folder: "downloads", // optional, default: "youtube-exec"
//     filename: "filename", // optional, default: video title
//     quality: "best", // or "lowest"; default: "best"
//   })
//     .then(() => {
//       console.log("Audio downloaded successfully! 🔊🎉");
//     })
//     .catch((err) => {
//       console.error("An error occurred:", err.message);
//     });
// });


import { dlAudio } from "youtube-exec";

const field = document.getElementById('myForm').addEventListener('submit', function(event) {
  console.log(1)
  event.preventDefault(); // Prevent form submission
  var inputText = document.getElementById('myInput').value;
  console.log('Input:', inputText);
  // Use the inputText variable as needed

  dlAudio({
    url: inputText,
    folder: "downloads", // optional, default: "youtube-exec"
    filename: "filename", // optional, default: video title
    quality: "best", // or "lowest"; default: "best"
  })
    .then(() => {
      console.log("Audio downloaded successfully! 🔊🎉");
    })
    .catch((err) => {
      console.error("An error occurred:", err.message);
    });
});
