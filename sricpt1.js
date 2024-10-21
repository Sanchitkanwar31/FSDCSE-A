const bulbContainer = document.getElementById('bulbContainer');
const controls = document.getElementById('controls');
const startBtn = document.getElementById('startBtn');
const addBulbBtn = document.getElementById('addBulbBtn');

// Show the controls when the Start button is clicked
startBtn.addEventListener('click', function() {
    controls.style.display = 'block'; // Show the controls
    startBtn.style.display = 'none'; // Hide the Start button
});

addBulbBtn.addEventListener('click', function() {
    const numBulbs = parseInt(document.getElementById('numBulbs').value);

    // Clear previous bulbs
    bulbContainer.innerHTML = '';

    // Loop to add the specified number of bulbs
    for (let i = 0; i < numBulbs; i++) {
        const bulbImage = document.createElement('img');
        bulbImage.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png'; // Use the "off" bulb image
        bulbImage.classList.add('bulb');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                bulbImage.src = 'https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png'; // Change to "on" bulb image
            } else {
                bulbImage.src = 'https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png'; // Change back to "off" bulb image
            }
        });

        const label = document.createElement('label');
        label.innerText = 'Light Bulb';

        const bulbWrapper = document.createElement('div');
        bulbWrapper.appendChild(bulbImage);
        bulbWrapper.appendChild(checkbox);
        bulbWrapper.appendChild(label);

        bulbContainer.appendChild(bulbWrapper);
    }

    // Hide the "Add Bulbs" button after adding bulbs
    addBulbBtn.style.display = 'none';
});
