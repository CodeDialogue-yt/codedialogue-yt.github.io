// Create image elements
var python = document.createElement("img");
python.src = "python.png";
python.alt = "Python";
python.classList.add(center)

var js = document.createElement("img");
js.src = "javascript.png";
js.alt = "JavaScript";
js.classList.add(center)

var java = document.createElement("img");
java.src = "java.png";
java.alt = "Java";
java.classList.add(center)

// Create image elements
var c = document.createElement("img");
c.src = "c.png";
c.alt = "C";
c.classList.add(center)

var cpp = document.createElement("img");
cpp.src = "cpp.png";
cpp.alt = "C++";
cpp.classList.add(center)

var cs = document.createElement("img");
cs.src = "cs.png";
cs.alt = "C#";
cs.classList.add(center)


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
