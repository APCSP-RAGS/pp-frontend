<!DOCTYPE html>
<html lang="en-US"><head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

<!-- Begin Jekyll SEO tag v2.8.0 -->
<title>RAGS Passion Project Frontend | August 2023 to June 2024</title>
<meta name="generator" content="Jekyll v3.9.3" />
<meta property="og:title" content="RAGS Passion Project Frontend" />
<meta property="og:locale" content="en_US" />
<meta name="description" content="August 2023 to June 2024" />
<meta property="og:description" content="August 2023 to June 2024" />
<link rel="canonical" href="http://localhost:4200/pp-frontend/music-recommender.html" />
<meta property="og:url" content="http://localhost:4200/pp-frontend/music-recommender.html" />
<meta property="og:site_name" content="RAGS Passion Project Frontend" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary" />
<meta property="twitter:title" content="RAGS Passion Project Frontend" />
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebPage","description":"August 2023 to June 2024","headline":"RAGS Passion Project Frontend","url":"http://localhost:4200/pp-frontend/music-recommender.html"}</script>
<!-- End Jekyll SEO tag -->

  <link rel="stylesheet" href="/pp-frontend/assets/css/style.css?v=3691f7a94d54763f85f55bac895eb52539ffd4a3">
  <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>

    
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <!-- start custom head snippets, customize with your own _includes/head-custom.html file -->

<!-- Setup Google Analytics -->



<!-- You can set your favicon here -->
<!-- link rel="shortcut icon" type="image/x-icon" href="/pp-frontend/favicon.ico" -->

<!-- end custom head snippets -->

</head><body>

  <div class="wrapper">
    <header><style>
  .site-header {
    font-family: monospace;
    font-size: 1%;
    
    position: absolute;
    transition: top 0.2s ease-in-out;
    padding-top: 1%;
    left: -80px;
    margin-top: 115%;
  }

  .pfp {
    border-radius: 50%;
    position: absolute;
    left: -80px;
  }

h1::before {  
  transform: scaleX(0);
  transform-origin: bottom right;
}

h1:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

h1::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  inset: 0 0 0 0;
  background: rgb(0, 0, 0);
  z-index: -1;

  transition: transform .3s ease;
}

h1 {
  position: relative;
  color: #39FF14;
  font-family: Monospace;
  text-align: center;
  padding: 0.2rem;
}
h2 {
  position: relative;
  color: #39FF14;
  font-family: Monospace;
  text-align: center;
  padding: 0.2rem;
}
.lightmode {
    background-color: #F2EBE2;
    color: black;
}

</style>
<style> 
  img {
    position: relative;
    border: 3px solid;
    border-color: #39FF14;
  }
  body { background-color: #171515; color: #F2EBE2; } 
  p{font-family: sans-serif;}
  hr{background-color: #F2EBE2}
  .color{color: #F2EBE2;}
  body {
    padding: 25px;
    background-color: #171515;
    color: #7289da;
    font-size: 16px;
    transition-duration: 0.2s;
  }
  hr{background-color: #7289da;}
  .dark-mode {
    background-color: #F2EBE2;
    color: #171515;
    transition-duration: 0.2s;
  }
  .bar-dark{background-color: #171515}
  .table-dark{color: #171515}
  
  .border-dark {
    border: 1px solid black;
  }
  .cells-dark {
    width: 100px;
      height: 100px;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
  }
  .board {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-gap: 2px;
    }
    .cell {
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
    }
    .header-dark {
      color: #7289da;
    }
    .image-dark {
      border-color: #7289da;
    }
    .header-dark::before {
    background: #ffff;
    }
    button {
      background-color: transparent;
      border: 0px;
    }
</style>



<img src="/pp-frontend/images/rags_pfp.gif" width="450" class="pfp">

<header class="site-header">
  <div id="header">
    <nav>
      <a href="/pp-frontend/"><h1 style="font-size: 30px;">./home</h1></a> <br>
      <a href="/pp-frontend/projects"><h1 style="font-size: 30px;">./projects</h1></a><br>
      <a href="https://github.com/APCSP-RAGS/pp-frontend.git#readme"><h1 style="font-size: 30px;">View On GitHub</h1></a> <br>
      <button onclick="toggleMode()"><h1 style="font-size: 30px;">Light/Dark Mode</h1></button>
    </nav>
  </div><!-- end header -->
</header>





<script>
  var preferDark = window.localStorage.getItem('preferDark');

  if (preferDark !== 'true' && preferDark !== 'false') {
    window.localStorage.setItem('preferDark', 'false');
    preferDark = window.localStorage.getItem('preferDark');
  }

  function toggleMode() {
      if (preferDark === 'true') {
        lightMode();
        preferDark = 'false';
      } else {
        darkMode();
        preferDark = 'true';
      }
      window.localStorage.setItem('preferDark', preferDark);
    }

  function darkMode() {
    var headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headers.forEach(function(header) {
      header.classList.add("header-dark");
    });
    var images = document.querySelectorAll("img");
    images.forEach(function(image) {
      image.classList.add("image-dark");
    });
    var element = document.body;
    element.classList.add("dark-mode");
    var elem = document.querySelectorAll("#border");
    elem.forEach(function(border) {
      border.classList.add("border-dark");
      });
    var bars = document.querySelectorAll("#bar");
    bars.forEach(function(bar) {
      bar.classList.add("bar-dark");
      });
    var cellz = document.querySelectorAll("#cells");
    cellz.forEach(function(cells) {
      cells.classList.add("cell");
      cells.classList.add("cells-dark");
      });
    var tables = document.querySelectorAll("#table");
    tables.forEach(function(table) {
      // table.classList.add("myTable")
      table.classList.add("table-dark");
      });
      document.body.classList.add('dark-mode');
  }
  function lightMode() {
    var headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headers.forEach(function(header) {
      header.classList.remove("header-dark");
    });
    var images = document.querySelectorAll("img");
    images.forEach(function(image) {
      image.classList.remove("image-dark");
    });
    var element = document.body;
    element.classList.remove("dark-mode");
    var elem = document.querySelectorAll("#border");
    elem.forEach(function(border) {
      border.classList.remove("border-dark");
      });
    var bars = document.querySelectorAll("#bar");
    bars.forEach(function(bar) {
      bar.classList.remove("bar-dark");
      });
    var cellz = document.querySelectorAll("#cells");
    cellz.forEach(function(cells) {
      cells.classList.remove("cell");
      cells.classList.remove("cells-dark");
      });
    var tables = document.querySelectorAll("#table");
    tables.forEach(function(table) {
      // table.classList.remove("myTable")
      table.classList.remove("table-dark");
      });
      document.body.classList.remove('dark-mode');
  }
  document.addEventListener("DOMContentLoaded", function() {
    if (preferDark == 'true') {
    darkMode();
  } else {
    lightMode();
  }
  });
  </script>
</header>


    <section>
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
    <br />
    <br />
    <br />
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

    </section>

  </div>
</body>


</html>