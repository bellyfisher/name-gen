// Get form inputs
let firstName = document.getElementById('q1').value;
let middleName = document.getElementById('q2').value;
let lastName = document.getElementById('q3').value;
let suffixInput = document.getElementById('q4').value;

let prefix = '';
let suffix = '';

// Determine prefix based on input
if (firstName) {
    prefix = firstName;
    if (middleName) {
        prefix = firstName + ' ' + middleName;
    }
} else if (middleName) {
    prefix = middleName;
} else if (lastName) {
    prefix = lastName;
}

// Determine suffix based on input
if (suffixInput === 'jr') {
    suffix = 'Jr.';
} else if (suffixInput === 'sr') {
    suffix = 'Sr.';
} else if (suffixInput === 'iii') {
    suffix = 'III';
} else if (suffixInput === 'ii') {
    suffix = 'II';
} else if (suffixInput) {
    suffix = suffixInput;
}

// Combine prefix and suffix
let fullName = '';
if (prefix && suffix) {
    fullName = prefix + ' ' + suffix;
} else if (prefix) {
    fullName = prefix;
} else if (suffix) {
    fullName = suffix;
}

// Display result
if (fullName) {
    document.getElementById('result').textContent = fullName;
} else {
    document.getElementById('result').textContent = 'Please enter a name';
}