// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Select the loading animation and overlay elements
    const loadingAnimation = document.getElementById("loading-animation");
    const overlay = document.getElementById("overlay");
  
    // Function to show the loading animation and overlay
    function showLoadingAnimation() {
      // Show the loading animation
      loadingAnimation.style.display = "block";
  
      // Apply blur effect to the rest of the content
      // You may need to adjust the selector to target the specific content you want to blur
      const contentToBlur = document.querySelector("body");
      contentToBlur.style.filter = "blur(5px)";
  
      // Show the overlay
      overlay.style.display = "block";
    }
  
    // Function to hide the loading animation and overlay
    function hideLoadingAnimation() {
      // Hide the loading animation
      loadingAnimation.style.display = "none";
  
      // Remove the blur effect from the content
      const contentToBlur = document.querySelector("body");
      contentToBlur.style.filter = "none";
  
      // Hide the overlay
      overlay.style.display = "none";
    }
  
    // Show the loading animation when the page loads or refreshes
    showLoadingAnimation();
  
    // Here you can also add an event listener to trigger the animation when the page is loaded via AJAX or any other dynamic content loading.
  
    // Optional: You may want to add a delay to simulate the loading process
    setTimeout(hideLoadingAnimation, 2000); // Adjust the time (in milliseconds) as needed
  });
  