---
layout: default
title: RAGS Group Blog
---


<html>

<style>

body {
      background-color: #171515;
      color: #ffffff;
  }

h2::before {  
  transform: scaleX(0);
  transform-origin: bottom right;
}

h2:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

h2::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  inset: 0 0 0 0;
  background: rgb(0, 0, 0);
  z-index: -1;
  transition: transform .3s ease;
}

h2 {
  position: relative;
  color: #39FF14;
  font-size: 1.5rem;
  font-family: Monospace;
}

p {
  font-family: Monospace;
}

html {
  block-size: 100%;
  inline-size: 100%;
}

body {
  min-block-size: 100%;
  min-inline-size: 100%;
  margin: 0;
  box-sizing: border-box;
  display: grid;
  font-family: system-ui, sans-serif;
}

.block-container {
    padding-top: 1rem;
    padding-bottom: 0rem;
    padding-left: 5rem;
    padding-right: 0rem;
}

/* @media (orientation: landscape) {
  body {
    grid-auto-flow: column;
  }
} */
</style>


<body>
<h2>About</h2>
<p>In this website, we will show off the fruits of our labor: our projects. Our projects consist of</p>
<ul>
<li> Music Composition </li>
<li> Character Playlists </li>
</ul>
</body>

<img id="imageElement" src="" alt="Image Placeholder">
    
<script>
    // Get the image element by its id
    const imageElement = document.getElementById("imageElement");
    
    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = new Date().getDay();
    
    // Array of image URLs, one for each day of the week (0-6)
    const imageUrls = [
        "https://awsrags-flask.stu.nighthawkcodingsociety.com/memes/sunday.jpg",
        "https://awsrags-flask.stu.nighthawkcodingsociety.com/memes/monday.jpg",
        "https://awsrags-flask.stu.nighthawkcodingsociety.com/memes/tuesday.jpg",
        "https://awsrags-flask.stu.nighthawkcodingsociety.com/memes/wednesday.jpg",
        "https://awsrags-flask.stu.nighthawkcodingsociety.com/memes/thursday.jpg",
        "https://awsrags-flask.stu.nighthawkcodingsociety.com/memes/friday.jpg",
        "https://awsrags-flask.stu.nighthawkcodingsociety.com/memes/saturday.jpg"
    ];
    
    // Set the image source URL based on the current day
    imageElement.src = imageUrls[dayOfWeek];
</script>