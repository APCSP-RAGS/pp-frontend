---
title: Songs for Breaking Bad Characters
layout: default
description: Uses GET requests to retrieve data from a custom API using SQLite and served on our Flask backend.
permalink: /data/songs
tags: [javascript, fetch, dom, getElementID, appendChild]
---

<html>
<head>
  <style>
        body {
      background-color: #000;
      color: #0f0;
      font-family: 'Courier New', monospace;
      overflow: hidden;
      margin: 0;
      transition: background-color 0.5s;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: auto;
      padding: 10px;  
      width: 800px;
      transition: background-color 0.5s;
    }

    .table-container {
      background-color: #000;
      padding: 20px;
      overflow: auto;
      border-radius: 10px;
      box-shadow: 0 0 15px #0f0, 0 0 30px #0f0, 0 0 45px #0f0; /* Default ring light effect */
      animation: ring-light 3s ease-in-out infinite, music 1s linear alternate;
      transition: background-color 0.5s, box-shadow 0.5s;
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

    /* Style for input fields and buttons */
    label {
      color: #0f0;
      font-weight: bold;
      margin-right: 10px;
    }

    input[type="text"] {
      background-color: #000;
      color: #0f0;
      border: 1px solid #0f0;
      border-radius: 5px;
      padding: 5px;
    }

    button {
      background-color: #0f0;
      color: #000;
      border: none;
      border-radius: 5px;
      padding: 5px 10px;
      cursor: pointer;
      margin-top: 10px;
    }

    button:hover {
      background-color: #00f;
    }
  </style>
</head>
<body class="hacker-theme">
  <div class="container">
    <div class="table-container">
      <!-- Input options -->
      <div>
        <h2>Add New Song Data</h2>
        <div>
          <label for="newCharacter">Character:</label>
          <input type="text" id="newCharacter">
        </div>
        <div>
          <label for="newSongName">Song Name:</label>
          <input type="text" id="newSongName">
        </div>
        <div>
          <label for "newArtist">Artist:</label>
          <input type="text" id="newArtist">
        </div>
        <div>
          <label for="newGenre">Genre:</label>
          <input type="text" id="newGenre">
        </div>
        <div>
          <label for="newLyrics">Lyrics:</label>
          <textarea id="newLyrics" rows="4"></textarea>
        </div>
        <button onclick="addNewSong()">Add Song</button>
      </div>
      
      <!-- HTML table for displaying data -->
      <table class="hacker-theme">
        <!-- ... (Rest of the HTML content) ... -->
      </table>
    </div>
  </div>

  <script>
    // Function to add new song data to the backend
    function addNewSong() {
      const newCharacter = document.getElementById("newCharacter").value;
      const newSongName = document.getElementById("newSongName").value;
      const newArtist = document.getElementById("newArtist").value;
      const newGenre = document.getElementById("newGenre").value;
      const newLyrics = document.getElementById("newLyrics").value;

      const apiUrl = "/api/song"; // Assumes the backend is running on the same domain

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          character: newCharacter,
          song_name: newSongName,
          artist: newArtist,
          genre: newGenre,
          lyrics: newLyrics
        })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to add new song');
          }
          return response.json();
        })
        .then(data => {
          // Clear input fields after adding
          document.getElementById("newCharacter").value = "";
          document.getElementById("newSongName").value = "";
          document.getElementById("newArtist").value = "";
          document.getElementById("newGenre").value = "";
          document.getElementById("newLyrics").value = "";

          // You can update the UI or perform any other necessary actions
        })
        .catch(error => {
          console.error('Error adding new song:', error);
        });
    }

    // ... (The rest of the JavaScript code) ...
  </script>
</body>
</html>

