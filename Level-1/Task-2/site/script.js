function validatePage1() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value;

    if (name === "" || email === "" || age === "") {
        alert("Please fill all fields before proceeding.");
        return false;
    }
    return true;
}

function validatePage2() {
    const purpose = document.querySelector('input[name="purpose"]:checked');

    if (!purpose) {
        alert("Please select the main purpose of usage.");
        return false;
    }
    return true;
}
