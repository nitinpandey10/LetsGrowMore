const getUserBtn = document.getElementById('get-users-btn');
const userCardGrid = document.getElementById('user-card-grid');
const loader = document.getElementById('loader');

getUserBtn.addEventListener('click', fetchUsers);

function fetchUsers() {
    loader.classList.add('show');
    fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => {
            loader.classList.remove('show');
            renderUserCards(data.data);
        })
        .catch(error => console.error(error));
}

function renderUserCards(users) {
    userCardGrid.innerHTML = '';
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name}">
            <h2>${user.first_name} ${user.last_name}</h2>
            <p>${user.email}</p>
        `;
        userCardGrid.appendChild(userCard);
    });
}