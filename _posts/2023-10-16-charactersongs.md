---
title: Songs for Breaking Bad Characters
layout: base
description: Uses GET requests to retrieve data from a custom API using SQLite and served on our Flask backend.
permalink: /data/songs
tags: [javascript, fetch, dom, getElementID, appendChild]
---
<html>
<head>
  <style>
    /* Style for the table */
    body {
      background-color: #000;
      color: #0f0;
      font-family: 'Courier New', monospace;
      overflow-y: scroll;
      margin: 0;
      transition: background-color 0.5s;
    }

    /* Center the table horizontally */
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow-y: scroll;
      padding: 10px;
      transition: background-color 0.5s;
    }

    .table-container {
      background-color: #000;
      padding: 20px;
      overflow-y: scroll;
      border-radius: 10px;
      box-shadow: 0 0 15px #0f0, 0 0 30px #0f0, 0 0 45px #0f0;
      animation: ring-light 3s ease-in-out infinite, music 1s linear alternate;
      transition: background-color 0.5s, box-shadow 0.5s;
    }

      .toggle-lyrics-button {
    background-color: #0f0;
    color: #000;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .toggle-lyrics-button:hover {
    background-color: #00f;
  }

    @keyframes ring-light {
      0%, 100% {
        box-shadow: 0 0 15px #0f0, 0 0 30px #0f0, 0 0 45px #0f0;
      }
      25% {
        box-shadow: 0 0 20px #f00, 0 0 35px #0f0, 0 0 45px #00f;
      }
      50% {
        box-shadow: 0 0 25px #00f, 0 0 30px #f00, 0 0 45px #0f0;
      }
      75% {
        box-shadow: 0 0 20px #0f0, 0 0 35px #00f, 0 0 45px #f00;
      }
    }

    @keyframes music {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(10px);
      }
    }

    table {
      width: 100%;
      border-collapse: collapse;
      white-space: pre-line;
      border-radius: 10px;
    }

    table th {
      background-color: #000;
      color: #0f0;
      font-weight: bold;
      white-space: pre-line;
    }

    table th, table td {
      border: 1px solid #333;
      padding: 8px;
      text-align: left;
      border-radius: 10px;
      white-space: pre-line;
    }

    .lyrics {
      display: none;
      max-height: 200px;
      overflow: auto;
      border-radius: 10px;
    }

    /* Add a hacker-inspired style */
    .hacker-theme {
      background-color: #000;
      color: #0f0;
    }

    .hacker-theme a {
      color: #0f0;
    }

    /* YouTube ambient mode style */
    .ambient-mode {
      background-color: #212121;
    }

  </style>
</head>
<a href="../">
    <h1 style="font-size: 20; left: 2%; top: 1%; position: fixed;">>>Back</h1>
</a>
<body class="hacker-theme">
  <div class="container">
    <div class="table-container">
      <div class="add-container">
        <h2>Add a song</h2>
        <label for="songName">Song Name:</label>
        <input type="text" id="songName" placeholder="Enter song name">

        <label for="artistName">Artist Name:</label>
        <input type="text" id="artistName" placeholder="Enter artist name">

        <label for="genre">Genre:</label>
        <input type="text" id="genre" placeholder="Enter genre">

        <label for="character">Person:</label>
        <input type="text" id="character" placeholder="Enter character">
        
        <button onclick="addSong()">Add</button>
      </div>
      <!-- HTML table for displaying data -->
      <table class="hacker-theme">
        <h2>Songs</h2>
        <thead>
          <tr>
            <th>Character</th>
            <th>Song Name</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Lyrics</th>
            <th>Lyrics Toggle</th>
          </tr>
        </thead>
        <tbody id="result">
          <!-- Data will be populated here -->
        </tbody>
      </table>
    </div>
  </div>

  <script>
    // Function to toggle lyrics visibility
    function toggleLyrics(row) {
      const lyricsCell = row.querySelector('.lyrics');
      if (lyricsCell.style.display === 'none' || lyricsCell.style.display === '') {
        lyricsCell.style.display = 'block';
      } else {
        lyricsCell.style.display = 'none';
      }
    }

    // Function to toggle ambient mode
    function toggleAmbientMode() {
      const body = document.body;
      const container = document.querySelector('.container');
      const tableContainer = document.querySelector('.table-container');

      if (body.classList.contains('ambient-mode')) {
        body.classList.remove('ambient-mode');
        container.classList.remove('ambient-mode');
        tableContainer.classList.remove('ambient-mode');
      } else {
        body.classList.add('ambient-mode');
        container.classList.add('ambient-mode');
        tableContainer.classList.add('ambient-mode');
      }
    }

    function addSong() {
      const songName = document.getElementById("songName").value;
      const artistName = document.getElementById("artistName").value;
      const genre = document.getElementById("genre").value;
      const character = document.getElementById("character").value;

      const apiUrl2 = `https://awsrags-flask.stu.nighthawkcodingsociety.com/api/song/create`
      var body = {
        "song_name": songName,
        "artist": artistName,
        "genre": genre,
        "character": character,
      }
      fetch("https://awsrags-flask.stu.nighthawkcodingsociety.com/api/song/create", {method:'POST', body: JSON.stringify(body), headers: {
      'Content-type': 'application/json',
      }})
        .then(response => response.json())  
        .then(json => {
          console.log(json)
          fetchSongs()
      })
    }

    // Fetch data from the API
    function fetchSongs() {
      const apiUrl = "https://awsrags-flask.stu.nighthawkcodingsociety.com/api/song/";

      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
              }
          return response.json();
        })
        .then(data => {
          const resultContainer = document.getElementById("result");

          resultContainer.innerHTML = "";

          data.forEach(Song => {
            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${Song.character}</td>
              <td>${Song.song_name}</td>
              <td>${Song.artist}</td>
              <td>${Song.genre}</td>
              <td class="lyrics">${Song.lyrics}</td>
              <td><button onclick="toggleLyrics(this.parentNode.parentNode)">Toggle Lyrics</button></td>
            `;
            resultContainer.appendChild(row);
          });
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
    fetchSongs()
  </script>
  <button onclick="toggleAmbientMode()">Toggle Ambient Mode</button>
</body>
</html>


