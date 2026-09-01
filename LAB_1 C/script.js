function getUserData() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);

    request.onload = function () {
        if (request.status === 200) {
            let data = JSON.parse(request.responseText);
            let box = document.getElementById("output");

            if (box) {
                box.style.display = "block";
                box.innerHTML =
                    "<h3>User Information</h3>" +
                    "<p><b>Name:</b> " + data.name + "</p>" +
                    "<p><b>Email:</b> " + data.email + "</p>" +
                    "<p><b>Phone:</b> " + data.phone + "</p>" +
                    "<p><b>City:</b> " + data.address.city + "</p>" +
                    "<p><b>Company:</b> " + data.company.name + "</p>";
            }
        } else {
            alert("Failed to fetch data!");
        }
    };

    request.send();
}
