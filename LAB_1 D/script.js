document.getElementById("regForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let course = document.getElementById("course").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    let hiddenPassword = "*".repeat(password.length);

    document.getElementById("output").innerHTML = `
        <h3>Registration Successful</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Password:</b> ${hiddenPassword}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Course:</b> ${course}</p>
        <p><b>Gender:</b> ${gender}</p>
    `;
});
