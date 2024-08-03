
var python = document.createElement("img");
python.src = "python.png";
python.alt = "Python";

var js = document.createElement("img");
js.src = "javascript.png";
js.alt = "JavaScript";

var java = document.createElement("img");
java.src = "java.png";
java.alt = "Java";

var c = document.createElement("img");
c.src = "c.png";
c.alt = "C";

var cpp = document.createElement("img");
cpp.src = "cpp.png";
cpp.alt = "C++";

var cs = document.createElement("img");
cs.src = "cs.png";
cs.alt = "C#";

var php = document.createElement("img");
php.src = "php.png";
php.alt = "PHP";

var ruby = document.createElement("img");
ruby.src = "ruby.png";
ruby.alt = "Ruby";

var swift = document.createElement("img");
swift.src = "swift.png";
swift.alt = "Swift";

var ts = document.createElement("img");
ts.src = "typescript.png";
ts.alt = "TypeScript";

var views = 0
var element = "Python"
// Dictionary with programming languages
// Dictionary with programming languages and their view counts
var languages = {
    "Python": [python, 450000],
    "JavaScript": [js, 500000],
    "Java": [java, 300000],
    "C": [c, 250000],
    "C++": [cpp, 200000],
    "C#": [cs, 180000],
    "PHP": [php, 140000],
    "Ruby": [ruby, 100000],
    "Swift": [swift, 120000],
    "TypeScript": [ts, 150000]
};

// Variable to store the current language being guessed
let currentLanguageKey;

// Function to pick a random element from the dictionary
function pickRandomLanguage() {
    var keys = Object.keys(languages);
    currentLanguageKey = keys[Math.floor(Math.random() * keys.length)];
    var randomElement = languages[currentLanguageKey];

    // Clear previous output and add the new image
    var container = document.getElementById("imageContainer");
    container.innerHTML = ""; // Clear previous output
    container.appendChild(randomElement[0]); // Append the image
}

document.addEventListener("DOMContentLoaded", function() {
    // Display a random language image on page load
    pickRandomLanguage();

    // Create image elements
    let table = document.getElementById("guesses");
    var header = table.createTHead();
    var row = header.insertRow(0);
    row.insertCell(0).innerHTML = "Guess";
    row.insertCell(1).innerHTML = "Programming Language";
    row.insertCell(2).innerHTML = "Monthly Views"


    // Get the form element
    const form = document.getElementById("guessForm");

    // Add an event listener to the form for submit events
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        check(); // Call the check function
    });
});
var guessNum = 0;
function check() {
    var guess = document.getElementById("langGuess").value.toLowerCase();  // Convert guess to lowercase
    let table = document.getElementById("guesses");
    guessNum++;

    // Convert the languages object keys to lowercase to ensure case-insensitivity
    let lowerCaseLanguages = {};
    for (let key in languages) {
        lowerCaseLanguages[key.toLowerCase()] = languages[key];
    }
    // Check if the guess is in the lowerCaseLanguages object
    if (guess in lowerCaseLanguages) {

        let newRow = table.insertRow(table.rows.length);
        let keysArray = Object.keys(languages).map(key => key.toLowerCase());
        let index = keysArray.indexOf(guess);
        var order = ["Python", "JavaScript", "Java", "C", "C++", "C#", "PHP", "Ruby", "Swift", "TypeScript"];
        newRow.insertCell(0).innerHTML = guessNum;
        newRow.insertCell(1).innerHTML = order[index];
        newRow.insertCell(2).innerHTML = lowerCaseLanguages[guess][1];
        alert(Math.abs(lowerCaseLanguages[guess][1] - lowerCaseLanguages[currentLanguageKey.toLowerCase()][1]) === 100000)
        alert(guess === currentLanguageKey.toLowerCase())
        if (guess === currentLanguageKey.toLowerCase()) {

            document.getElementById("langGuess").value = "";
            document.getElementById("langGuess").disabled = true;
            document.getElementById("guessed").textContent = "You guessed it!"
            newRow.style.backgroundColor = "green";

        }
        
        else if (Math.abs(lowerCaseLanguages[guess][1] - lowerCaseLanguages[currentLanguageKey.toLowerCase()][1]) === 100000) {
            newRow.style.backgroundColor = "yellowgreen";
            document.getElementById("guessed").textContent = "100 000 monthly views away!"
        }
        else {
            document.getElementById("guessed").textContent = ""
        }
    }

    // Clear the input field for the next guess
    document.getElementById("langGuess").value = "";
}


function restart() {
    location.reload();    
}