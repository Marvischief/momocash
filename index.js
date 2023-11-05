document.getElementById("popup-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    var popup = document.getElementById("popup");
    popup.style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
});











