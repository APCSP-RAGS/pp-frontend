<html>
<head>
    <title>Music Generator</title>
    <style>
        .green-text {
            color: #39FF14;
        }
    </style>
</head>
<body>
    <h1>Music Generator</h1>
    <div id="inputOutputPairs">
        <!-- Input and Output Pairs -->
        <div class="pair">
            <label for="genreInput" class="green-text">Enter a Genre for the song:</label>
            <input type="text" id="genreInput" class="green-text">
            <button onclick="saveInput('genreInput', 'genreOutput')"><a>Save Input</a></button>
        </div>
        <div class="pair">
            <label for="tempoInput" class="green-text">Enter a preferred tempo:</label>
            <input type="text" id="tempoInput" class="green-text">
            <button onclick="saveInput('tempoInput', 'tempoOutput')"><a>Save Input</a></button>
        </div>
        <div class="pair">
            <label for="lengthInput" class="green-text">Enter length of song:</label>
            <input type="text" id="lengthInput" class="green-text">
            <button onclick="saveInput('lengthInput', 'lengthOutput')"><a>Save Input</a></button>
        </div>
    </div>
    <br>
    <br>
    <br>
    <div id="outputContainer">
        <h2 class="green-text">Outputs:</h2>
        <div id="genreOutput" class="green-text"></div>
        <div id="tempoOutput" class="green-text"></div>
        <div id="lengthOutput" class="green-text"></div>
    </div>
    <script>
        // Function to save user input to the specified output box
        function saveInput(inputId, outputId) {
            const inputField = document.getElementById(inputId);
            const inputValue = inputField.value;
            if (inputValue) {
                const outputBox = document.getElementById(outputId);
                outputBox.textContent = `${inputId.replace('Input', '')}: ${inputValue}`;
                inputField.value = '';
            } else {
                alert("Make sure there is a value before saving categories.");
            }
        }
    </script>
</body>
</html>
