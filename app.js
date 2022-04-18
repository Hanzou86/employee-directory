const body = document.querySelector('body');
const grid = document.querySelector('.grid-main');
let userData;

async function getUsers() {

}
getUsers()

console.log(userData);

// fetch('https://randomuser.me/api/?results=12')
// .then(response => response.json())
// .then(data => console.log(data));



function displayUsers() {
    let gridHtml = ``;
    fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => {   
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
        })
}

displayUsers();

function displayModal() {
     fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => {
        const user = data.requests.forEach(user => user)
        console.log(user);

        let modalHtml = `
            <div class='modal-bg'>
                <div class='modal-content'>
                    <img src='${userData.picture.large}' class='profile-pic'>
                    <h3 class='name'>${userData.name.first} ${user.name.last}</h3>
                    <span class='email'>${userData.email}</span>
                    <span class='location'>${userData.location.city}</span>
                    <hr>

                    
                </div>
            </div>
        `; 

        body.insertAdjacentHTML('afterbegin', modalHtml);
    });
}



function cardEvent() {
        grid.addEventListener('click', event => {
                const card = event.target.closest('.user-card');

                if (card !== null) {
                    displayModal();
                }
            })

}

cardEvent();

// const userCards = document.querySelector('.user-card');
// userCards.forEach(card => {
//     card.style.border = none;
//     card.addEventListener('click', event => {
//         event.target.
//     })
// })



// Figure out how to apply api data to modal display