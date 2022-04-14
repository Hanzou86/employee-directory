const body = document.querySelector('body');


fetch('https://randomuser.me/api/?results=12')
.then(response => response.json())
.then(data => console.log(data));



function getUsers() {
    fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => {
        let gridHtml = ``;
        const grid = document.querySelector('.grid-main');
        data.results.forEach(user => {

            gridHtml += `
                <div class='user-card'>
                    <div class='pic-container'><img src='${user.picture.large}' class='profile-pic'></div>
                    <div class='profile-info'>
                        <h3 class='name'>${user.name.first} ${user.name.last}</h3>
                        <span class='email'>${user.email}</span>
                        <span class='location'>${user.location.city}</span>
                    </div>
                </div>
            `;
            grid.innerHTML = gridHtml;
        });
    });
}

getUsers();


function displayModal() {
    let modalHtml = `
        <div class='modal-bg'>
            <div class='modal-content'></div>
        </div>
    `; 

    body.insertAdjacentHTML(afterbegin, modalHtml);
}

function cardEvent() {
    userCard.forEach(card => {
        card.addEventListener(click, event => {
            event.target.style.backgroundColor = 'blue';
        })
    })
}


const userCards = document.querySelector('.user-card');
userCards.forEach(card => {
    card.style.border = none;
    card.addEventListener('click', event => {
        event.target.style.backgroundColor = 'blue';
    })
})
