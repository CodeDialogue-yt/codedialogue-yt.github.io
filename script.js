// Create image elements
const python = createImage("python.png", "Python");
const js = createImage("javascript.png", "JavaScript");
const java = createImage("java.png", "Java");
const c = createImage("c.png", "C");
const cpp = createImage("cpp.png", "C++");
const cs = createImage("cs.png", "C#");
const php = createImage("php.png", "PHP");
const ruby = createImage("ruby.png", "Ruby");
const swift = createImage("swift.png", "Swift");
const ts = createImage("typescript.png", "TypeScript");

// Dictionary with programming languages and their view counts
const languages = {
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

let currentLanguageKey;

function createImage(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    return img;
}

// Function to pick a random element from the dictionary
function pickRandomLanguage() {
    const keys = Object.keys(languages);
    currentLanguageKey = keys[Math.floor(Math.random() * keys.length)];
    const randomElement = languages[currentLanguageKey];

    // Clear previous output and add the new image
    const container = document.getElementById("imageContainer");
    container.innerHTML = ""; // Clear previous output
    container.appendChild(randomElement[0]); // Append the image
}

document.addEventListener("DOMContentLoaded", function() {
    pickRandomLanguage();

    const form = document.getElementById("guessForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        check(); // Call the check function
    });
});

let guessNum = 0;

function check() {
    const guessInput = document.getElementById("langGuess");
    const guess = guessInput.value.trim().toLowerCase();
    const tableBody = document.getElementById("guesses").getElementsByTagName('tbody')[0];
    guessNum++;

    // Convert the languages object keys to lowercase to ensure case-insensitivity
    const lowerCaseLanguages = {};
    for (let key in languages) {
        lowerCaseLanguages[key.toLowerCase()] = languages[key];
    }

    if (guess in lowerCaseLanguages) {
        const newRow = tableBody.insertRow();
        newRow.insertCell(0).innerHTML = guessNum;
        newRow.insertCell(1).innerHTML = Object.keys(languages).find(key => key.toLowerCase() === guess); // Find and display the original key
        newRow.insertCell(2).innerHTML = lowerCaseLanguages[guess][1];

        if (guess === currentLanguageKey.toLowerCase()) {
            guessInput.value = "";
            guessInput.disabled = true;
            document.getElementById("guessed").textContent = "You guessed it!";
            newRow.style.backgroundColor = "green";
        } else if (Math.abs(lowerCaseLanguages[guess][1] - lowerCaseLanguages[currentLanguageKey.toLowerCase()][1]) === 100000) {
            newRow.style.backgroundColor = "yellowgreen";
            document.getElementById("guessed").textContent = "100,000 monthly views away!";
        } else {
            document.getElementById("guessed").textContent = "";
        }
    } else {
        document.getElementById("guessed").textContent = "Invalid guess!";
    }

    guessInput.value = ""; // Clear the input field
}

function restart() {
    location.reload();
}
