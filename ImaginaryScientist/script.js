document.getElementById("uploadButton").addEventListener("click", function () {
    const imageInput = document.getElementById("imageInput");
    const resultDiv = document.getElementById("result");

    if (imageInput.files.length === 0) {
        resultDiv.innerHTML = "<p>Please select an image to upload.</p>";
        return;
    }

    const uploadedImage = imageInput.files[0];

    // Simulate sending the image to a pathologist or doctor for analysis.
    // In a real application, you would send the image to a server for processing.

    // Display a message as a placeholder.
    resultDiv.innerHTML = "<p>Image uploaded. Awaiting analysis results...</p>";
});

// script.js

const uploadButton = document.getElementById("uploadButton");

uploadButton.addEventListener("click", () => {
    const resultDiv = document.getElementById("result");
    resultDiv.classList.add("scanning-animation");

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
        resultDiv.classList.remove("scanning-animation");
        resultDiv.textContent = "Scan Complete"; // You can set the desired message here
    }, 3000); // Simulate a 3-second scanning process
});

// Add these lines to your script.js

// Open the chat popup when clicking the "Chat with a Doctor" button
document.getElementById("openChatButton").addEventListener("click", function () {
    document.getElementById("chatPopup").style.display = "block";
});

// Close the chat popup
document.getElementById("closeChat").addEventListener("click", function () {
    document.getElementById("chatPopup").style.display = "none";
});

// Simulated chat functionality
document.getElementById("sendChat").addEventListener("click", function () {
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");
    const message = chatInput.value.trim();

    if (message !== "") {
        const userMessage = `<div class="user-message">${message}</div>`;
        chatMessages.innerHTML += userMessage;

        // Simulate a doctor's response (you can replace this with real communication)
        setTimeout(function () {
            const doctorResponse = `<div class="doctor-message">Hello! How can I assist you today?</div>`;
            chatMessages.innerHTML += doctorResponse;
        }, 1000); // Simulated delay

        chatInput.value = "";
    }
});

