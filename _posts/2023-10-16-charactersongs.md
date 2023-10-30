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
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      white-space: pre-line;
      display: block;
    }

    table th {
      background-color: #333;
      color: #0f0;
      font-weight: bold;
      white-space: pre-line;
    }

    table th, table td {
      border: 1px solid #333;
      padding: 8px;
      text-align: left;
      white-space: pre-line;
      height: 70px;
      overflow-y: scroll;
    }

    .lyrics {
      display: none;
    }

    /* Add a hacker-inspired style */
    .hacker-theme {
      background-color: #000;
      color: #0f0;
    }

    .hacker-theme a {
      color: #0f0;
    }
  </style>
</head>
<body class="hacker-theme">
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
        console.error("Error fetching data:", error);
      });
  </script>
</body>
</html>
