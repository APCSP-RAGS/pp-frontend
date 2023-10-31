---
layout: default
title: Character Playlists
---

<html>
<head>
    <!-- load jQuery and DataTables output style and scripts -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <style>
        .green-text {
            color: #39FF14;
        }
    </style>
</head>
<!-- Body contains the contents of the Document -->
<body>
    <h1>Music Recommender</h1>
    <div id="inputOutputPairs">
        <!-- Input and Output Pairs -->
        <div class="pair">
            <label for="genreInput" class="green-text">Enter top artists:</label>
            <input type="text" id="genreInput" class="green-text">
            <button onclick="saveInput('genreInput', 'genreOutput')">Save Input</button>
        </div>
        <div class="pair">
            <label for="tempoInput" class="green-text">Preferred song length:</label>
            <input type="text" id="tempoInput" class="green-text">
            <button onclick="saveInput('tempoInput', 'tempoOutput')">Save Input</button>
        </div>
        <div class="pair">
            <label for="musicTypeInput" class="green-text">Enter music type:</label>
            <input type="text" id="musicTypeInput" class="green-text">
            <button onclick="saveInput('musicTypeInput', 'musicTypeOutput')">Save Input</button>
        </div>
        <div class="pair">
            <label for="albumInput" class="green-text">Preferred Album:</label>
            <input type="text" id="albumInput" class="green-text">
            <button onclick="saveInput('albumInput', 'albumOutput')">Save Input</button>
        </div>
    </div>
    <br>
    <br>
    <br>
    <div id="outputContainer">
        <h2 class="green-text">Outputs:</h2>
        <div id="genreOutput" class="green-text"></div>
        <div id="tempoOutput" class="green-text"></div>
        <div id="musicTypeOutput" class="green-text"></div>
        <div id="albumOutput" class="green-text"></div>
    </div>

    <!-- Button to toggle lyrics -->
    <button id="toggleLyricsButton" onclick="toggleLyrics()">Toggle Lyrics</button>

    <!-- Lyrics container initially hidden -->
    <div id="lyricsContainer" style="display: none;">
        <h2 class="green-text">Lyrics:</h2>
        <p>This is where the lyrics will appear.</p>
    </div>
    
    <table id="demo" class="table">
        <thead>
            <tr>
                <th>Language</th>
                <th>Creator</th>
                <th>Year</th>
                <th>Latest Version</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Python</td>
                <td>Guido van Rossum</td>
                <td>1991</td>
                <td>3.11</td>
            </tr>
            <!-- Add more table rows as needed -->
        </tbody>
    </table>
</body>

<!-- Script is used to embed executable code -->
<script>
    const url = "https://awsrags-flask.stu.nighthawkcodingsociety.com/api/song/"

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    // Function to save user input to the specified output box
    function saveInput(inputId, outputId) {
        const inputField = document.getElementById(inputId);
        const inputValue = inputField.value;
        if (inputValue) {
            const outputBox = document.getElementById(outputId);
            outputBox.textContent = `${inputId.replace('Input', '')}: ${inputValue}`;
            inputField.value = '';
        } else {
            alert("Please enter a value before saving.");
        }
    }

    // Function to toggle the visibility of the lyrics container
    function toggleLyrics() {
        const lyricsContainer = document.getElementById('lyricsContainer');
        const button = document.getElementById('toggleLyricsButton');

        if (lyricsContainer.style.display === 'none') {
            lyricsContainer.style.display = 'block';
            button.textContent = 'Hide Lyrics';
        } else {
            lyricsContainer.style.display = 'none';
            button.textContent = 'Show Lyrics';
        }
    }

    $("#demo").DataTable();
</script>
</html>
