document.querySelector("#search").addEventListener("click", function() {
    const query = document.querySelector(".search-box").value; 

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.length > 0) {
                const show = data[0].show; // Accessing the first show
                document.querySelector(".movie-heading").innerText = show.name;

                // Check if rating is available
                const rating = show.rating ? show.rating.average : "No rating available";
                document.querySelector(".rating h3").innerText = rating;

                // Set button text to link to the show's URL
                document.querySelector(".button").innerText = "Visit Website";
                document.querySelector(".button").onclick = () => {
                    window.open(show.url, "_blank"); // Open the show URL in a new tab
                };

                console.log(show);
            } else {
                console.log("No shows found");
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});