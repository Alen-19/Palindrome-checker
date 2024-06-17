function up() {
    var input = document.getElementById("inp").value;
    var button = document.getElementById("checkBtn");
    button.classList.add("active");

    var message = document.getElementById("mes");
    message.style.display = "none";
}

function check() {
    var input = document.getElementById("inp").value.toLowerCase();
    if (input === "") {
        alert("Enter a text");
    } else {
        var message = document.getElementById("mes");
        message.style.display = "block";
        var orgText = input.split(" ").join("");
        var revText = orgText.split("").reverse().join("");
        if (orgText === revText) {
            message.innerHTML = input + " is a Palindrome";
        } else {
            message.innerHTML = input + " is not a Palindrome";
        }
    }
}
