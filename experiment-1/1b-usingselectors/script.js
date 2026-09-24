function selectElements() {

    // Select using ID
    let a = document.getElementById("title");

    // Select using class
    let b = document.querySelector(".text");

    // Change the elements
    a.style.color = "blue";
    b.style.color = "red";

    // Display message
    alert("Elements selected successfully!");
}
