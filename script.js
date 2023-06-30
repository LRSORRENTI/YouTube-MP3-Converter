 const field = document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var inputText = document.getElementById('myInput').value;
    console.log('Input:', inputText);
    // Use the inputText variable as needed
  });

