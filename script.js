        // Create image elements
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

            // Clear previous output and add the new image
            var container = document.getElementById("imageContainer");
            container.innerHTML = ""; // Clear previous output
            container.appendChild(randomElement); // Append the image
        }

        // Call the function to pick and display a random language
        pickRandomLanguage();
