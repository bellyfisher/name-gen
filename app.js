document.getElementById("generateBtn").addEventListener("click", generateName);

function generateName() {
    // Get values from inputs
    const gender = document.getElementById("q1").value;
    const age = document.getElementById("q2").value;
    const happiness = document.getElementById("q3").value;
    const place = document.getElementById("q4").value;
    const firstName = document.getElementById("q5").value;
    const lastName = document.getElementById("q6").value;

    // Basic validation
    if (!firstName || !lastName) {
        document.getElementById("result").textContent =
            "Please enter your first and last name!";
        return;
    }

    // Prefix based on gender & age
    let title = 'q1' + 'q2'
    if (gender === "1" && age <= 18) {
        title = "Prince";
    } else if (gender === "2" && age <= 18) {
        title = "Princess";
    } else  if (gender === "1" && age > 18){
        title = "King";
    }
    else {
        title = "Queen";
    }

    // Descriptor based on happiness
    let descriptor = "";
    if (happiness <= 1) descriptor = "the gloomy";
    else if (happiness <= 3) descriptor = "the steady";
    else descriptor = "the lovely";

    // Build and display the royal name
    let fullName = `${title} ${firstName} ${lastName} of ${descriptor} ${place}`;
    document.getElementById("result").textContent = fullName;
}
