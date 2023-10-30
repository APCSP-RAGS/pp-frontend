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
      transition: background-color 0.5s;
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

    // Fetch data from the API
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
  </script>
  <button onclick="toggleAmbientMode()">Toggle Ambient Mode</button>
</body>
</html>

