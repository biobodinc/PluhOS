// JavaScript Document
    document.getElementById('logings').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        const email = document.getElementById('ememe').value;
        const password = document.getElementById('pspss').value;
        // Example validation (replace with your actual logic)
        if (email === 'yeeter' && password === 'yeeyeey') {
            alert('Login successful!');
           window.location.href = 'main homepage.html'
			// Redirect to another page
            // window.location.href = 'welcome.html'; 
        } else {
            alert('Invalid credentials.');
        }
    });