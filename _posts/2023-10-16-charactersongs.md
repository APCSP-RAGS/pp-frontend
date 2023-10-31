---
title: Songs for Breaking Bad Characters
layout: base
description: Uses GET requests to retrieve data from a custom API using SQLite and served on our Flask backend.
permalink: /data/songs
tags: [javascript, fetch, dom, getElementID, appendChild]
---
<!DOCTYPE html>
<html>

<head>
  <style>
    /* Style for the table and other styles... */

    /* Style for the table */
    body {
      background-color: #000;
      color: #0f0;
      font-family: 'Courier New', monospace;
      overflow: hidden;
      margin: 0;
      transition: background-color 0.5s;
    }

    /* Center the table horizontally */
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: auto;
      padding: 10px;
      transition: background-color 0.5s;
    }

    .table-container {
      background-color: #000;
      padding: 20px;
      overflow: auto;
      border-radius: 10px;
      box-shadow: 0 0 15px #0f0, 0 0 30px #0f0, 0 0 45px #0f0;
      animation: ring-light 3s ease-in-out infinite, music 1s linear alternate;
      transition: background-color 0.5s, box-shadow 0.5s;
    }

    @keyframes ring-light {
      0%,
      100% {
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

    table th,
    table td {
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

<body class="hacker-theme">
  <div class="container">
    <div class="table-container">
      <!-- HTML table for displaying data -->
      <table class="hacker-theme">
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

  <form id="inputForm" class="hacker-theme">
    <label for="character">Character:</label>
    <input type="text" id="character" name="character" required><br><br>

    <label for="songName">Song Name:</label>
    <input type="text" id="songName" name="songName" required><br><br>

    <label for="artist">Artist:</label>
    <input type="text" id="artist" name="artist" required><br><br>

    <label for="genre">Genre:</label>
    <input type="text" id="genre" name="genre" required><br
    <label for="lyrics">Lyrics:</label>
    <textarea id="lyrics" name="lyrics" rows="4" cols="50" required></textarea><br><br>

    <button type="button" onclick="submitData()">Submit Data</button>
  </form>

  <script>
    // Function to toggle lyrics visibility...
    
    // Function to toggle ambient mode...
    
    // Function to submit data to the backend
    function submitData() {
      const character = document.getElementById("character").value;
      const songName = document.getElementById("songName").value;
      const artist = document.getElementById("artist").value;
      const genre = document.getElementById("genre").value;
      const lyrics = document.getElementById("lyrics").value;

      const data = {
        character: character,
        songName: songName,
        artist: artist,
        genre: genre,
        lyrics: lyrics
      };

      // Replace with the correct URL of your backend API
      const apiUrl = "https://awsrags-flask.stu.nighthawkcodingsociety.com/api/song/";

      // Send data to the backend using a POST request
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(result => {
        console.log('Data sent successfully:', result);
        // You can also update the table with the new data if needed
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
    }
  </script>
</body>
</html>

