<html>
<head>
    <title>Music Recommender</title>
    <style>
        .green-text {
            color: #39FF14;
        }
        .textarea {
            resize: none;
        }
    </style>
</head>
<body>
    <h1>Music Recommender</h1>
    <div id="inputOutputPairs">
        <!-- Input and Output Pairs -->
        <div class="pair">
            <label for="genreInput" class="green-text">Favorite Songs:</label>
            <textarea id="genreInput" class="green-text"></textarea>
            <button onclick="saveInput('genreInput', 'genreOutput')"><a>Save Input</a></button>
        </div>
        <div class="pair">
            <label for="tempoInput" class="green-text">Favorite Genres:</label>
            <textarea id="tempoInput" class="green-text"></textarea>
            <button onclick="saveInput('tempoInput', 'tempoOutput')"><a>Save Input</a></button>
        </div>
        <div class="pair">
            <label for="lengthInput" class="green-text">Enter preferred length of songs:</label>
            <textarea id="lengthInput" class="green-text"></textarea>
            <button onclick="saveInput('lengthInput', 'lengthOutput')"><a>Save Input</a></button>
        </div>
        <div class="pair">
            <label for="artistsInput" class="green-text">Favorite Artists:</label>
            <textarea id="artistsInput" class="green-text"></textarea>
            <button onclick="saveInput('artistsInput', 'artistsOutput')"><a>Save Input</a></button>
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
        <div id="artistsOutput" class="green-text"></div>
    </div>
    <script>
        // Function to save user input to the specified output box
        function saveInput(inputId, outputId) {
            const inputField = document.getElementById(inputId);
            const inputValue = inputField.value;
            if (inputValue) {
                const outputBox = document.getElementById(outputId);
                const existingValue = outputBox.textContent;
                if (existingValue) {
                    outputBox.textContent = `${existingValue}, ${inputValue}`;
                } else {
                    outputBox.textContent = inputValue;
                }
                inputField.value = '';
            } else {
                alert("Please enter a value before saving.");
            }
        }
    </script>
</body>
</html>
