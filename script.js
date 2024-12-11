function getRandomJoke() {
    const jokeElement = document.getElementById('joke'); // Get the div where the joke will be displayed
  
    // Set the initial message while the joke is being fetched
    jokeElement.innerHTML = "Loading...";
  
    // Fetch a random joke from JokeAPI
    fetch('https://v2.jokeapi.dev/joke/Programming')
      .then(response => {
        if (!response.ok) {
          throw new Error("Joke not found");
        }
        return response.json();
      })
      .then(data => {
        let jokeText = '';
  
        // Check the type of joke: single or two-part
        if (data.type === 'single') {
          jokeText = data.joke;
        } else if (data.type === 'twopart') {
          jokeText = `${data.setup} - ${data.delivery}`;
        }
  
        // Display the joke inside the 'joke' div
        jokeElement.innerHTML = `<p>${jokeText}</p>`;
      })
      .catch(error => {
        jokeElement.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  }
  