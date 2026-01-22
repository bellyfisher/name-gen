document.getElementById("generateBtn").addEventListener("click", generateName);

// Capitalize first letter of each word
function titleCase(str) {
    return str.toLowerCase().split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function generateName() {
    // Get values from inputs
    const gender = document.getElementById("q1").value;
    const age = Number(document.getElementById("q2").value);
    const happiness = Number(document.getElementById("q3").value);
    const place = document.getElementById("q4").value;
    const firstName = document.getElementById("q5").value;
    const lastName = document.getElementById("q6").value;

    // Basic validation
    if (!firstName || !lastName || !place.trim()) {
        document.getElementById("result").textContent =
            "Please fill in all fields!";
        return;
    }

    // Prefix based on gender & age
    let title;
    if (gender === "1" && age <= 18) {
        title = "Prince";
    } else if (gender === "2" && age <= 18) {
        title = "Princess";
    } else if (gender === "1" && age > 18) {
        title = "King";
    } else {
        title = "Queen";
    }

    // Descriptor based on happiness
    let descriptor;
    if (happiness <= 1) {
        descriptor = "the Gloomy";
    } else if (happiness <= 3) {
        descriptor = "the Steady";
    } else {
        descriptor = "the Lovely";
    }

    // Build and display the royal name
    const fullName = `${title} ${firstName} ${lastName} of ${descriptor} ${titleCase(place.trim())}`;
    const result = document.getElementById("result");
    result.textContent = fullName;
    result.style.display = "block";
    result.scrollIntoView({ behavior: "smooth" });
}
