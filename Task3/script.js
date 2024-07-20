const form = document.getElementById('registration-form');
const registrationDataDiv = document.getElementById('registration-data');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const userData = {};
    for (const [key, value] of formData) {
        userData[key] = value;
    }
    displayRegistrationData(userData);
});

function displayRegistrationData(userData) {
    const html = `
        <h2>Registration Data:</h2>
        <p>Name: ${userData.name}</p>
        <p>Email: ${userData.email}</p>
        <p>Password: ${userData.password}</p>
        <p>Confirm Password: ${userData['confirm-password']}</p>
    `;
    registrationDataDiv.innerHTML = html;
}