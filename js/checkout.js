// Validate transaction ID and enable the confirm button
function validatePayment() {
    let transactionInput = document.getElementById("transaction-id").value;
    let confirmButton = document.getElementById("payment-done");

    if (transactionInput.trim().length >= 6) {
        confirmButton.removeAttribute("disabled");
    } else {
        confirmButton.setAttribute("disabled", true);
    }
}

// Handle payment confirmation
function confirmPayment() {
    let transactionInput = document.getElementById("transaction-id").value;
    let message = document.getElementById("payment-message");

    if (transactionInput.trim().length >= 6) {
        message.style.display = "block";
        document.getElementById("payment-done").style.display = "none";
    } else {
        alert("Please enter a valid Transaction ID!");
    }
}
