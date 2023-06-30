// src/convert.js

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const url = document.getElementById('myInput').value;
    fetch('/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: url })
    })
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'video.mp3';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
  