document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let formData = new FormData(this);

  fetch("https://formsubmit.co/ivoinestrachan242@gmail.com", {
      method: "POST",
      body: formData
  })
  .then(response => {
      if (response.ok) {
          document.getElementById("response-message").textContent = "Message sent successfully!";
          this.reset();
      } else {
          document.getElementById("response-message").textContent = "Failed to send message.";
      }
  })
  .catch(error => {
      document.getElementById("response-message").textContent = "An error occurred.";
      console.error("Error:", error);
  });
});
