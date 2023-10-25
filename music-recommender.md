<html>
<head>
    <!-- load jQuery and DataTables output style and scripts -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>var define = null;</script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
</head>

<!-- Body contains the contents of the Document -->
<body>
    <h1>Music Recommender</h1>
    <div id="inputOutputPairs">
        <!-- Input and Output Pairs -->
        <div class="pair">
            <label for="genreInput" class="green-text">Enter top artists:</label>
            <input type="text" id="genreInput" class="green-text">
            <button onclick="saveInput('genreInput', 'genreOutput')"><a>Save Input</a></button>
        </div>
        <div class="pair">
            <label for="tempoInput" class="green-text">Preferred song length:</label>
            <input type="text" id="tempoInput" class="green-text">
            <button onclick="saveInput('tempoInput', 'tempoOutput')"><a>Save Input</a></button>
        </div>
        <div class="pair">
            <label for="lengthInput" class="green-text">Enter music type:</label>
            <input type="text" id="lengthInput" class="green-text">
            <button onclick="saveInput('lengthInput', 'lengthOutput')"><a>Save Input</a></button>
        </div>
         <div class="pair">
            <label for="lengthInput" class="green-text">Preferred Album:</label>
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
                alert("Please enter a value before saving.");
            }
        }
    </script>
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
            <tr>
                <td>C</td>
                <td>Brian K. and Dennis R.</td>
                <td>1978</td>
                <td>C23</td>
            </tr>
            <tr>
                <td>C++</td>
                <td>Bjarne Stroustrup</td>
                <td>1979</td>
                <td>C++20</td>
            </tr>
            <tr>
                <td>Java</td>
                <td>James Gosling</td>
                <td>1995</td>
                <td>JDK 20</td>
            </tr>
            <tr>
                <td>HTML</td>
                <td>Tim Berners-Lee</td>
                <td>1980</td>
                <td>HTML5</td>
            </tr>
            <tr>
                <td>JavaScript</td>
                <td>Brendan Eich</td>
                <td>1995</td>
                <td>ES14</td>
            </tr>
            <tr>
                <td>Bash</td>
                <td>Brian Fox</td>
                <td>1989</td>
                <td>5.2</td>
            </tr>
            <tr>
                <td>PowerShell</td>
                <td>Jeffery Snover</td>
                <td>2006</td>
                <td>7.3</td>
            </tr>
            <tr>
                <td>C#</td>
                <td>Anders Hejlsberg</td>
                <td>2000</td>
                <td>C# 11.0</td>
            </tr>
            <tr>
                <td>SQL</td>
                <td>Donald C. & Raymond B.</td>
                <td>1974</td>
                <td>16.0</td>
            </tr>
        </tbody>
    </table>
</body>

<!-- Script is used to embed executable code -->
<script>
    const url = "https://awsrags-flask.stu.nighthawkcodingsociety.com/api/song/"

    const options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  // prepare fetch PUT options, clones with JS Spread Operator (...)
    const put_options = {...options, method: 'PUT'}; // clones and replaces method

    $("#demo").DataTable();
</script>
</html>


