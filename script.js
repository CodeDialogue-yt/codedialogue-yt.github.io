// Create image elements
var python = document.createElement("img");
python.src = "python.png";
python.alt = "Python";

var js = document.createElement("img");
js.src = "javascript.png";
js.alt = "JavaScript";

var java = document.createElement("img");
java.src = "java.png";
js.alt = "Java";

// Create image elements
var c = document.createElement("img");
c.src = "c.png";
c.alt = "C";

var cpp = document.createElement("img");
cpp.src = "c++.png";
cpp.alt = "C++";

var cs = document.createElement("img");
cs.src = "c#.png";
cs.alt = "C#";

// Dictionary with programming languages
var languages = {
    "Python": python,
    "JavaScript": js,
    "Java": java,
    "C": c,
    "C++": cpp,
    "C#": cs
};

// Function to pick a random element from the dictionary
function pickRandomLanguage() {
    var keys = Object.keys(languages);
    var randomKey = keys[Math.floor(Math.random() * keys.length)];
    var randomElement = languages[randomKey];

    // Output key and value
    document.body.innerHTML = ""; // Clear previous output
    document.body.appendChild(randomElement); // Append the image
}

// Call the function to pick and display a random language
pickRandomLanguage();
