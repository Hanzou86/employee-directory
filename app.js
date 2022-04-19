const body = document.querySelector('body');
const grid = document.querySelector('.grid-main');
const modalBG = document.querySelector('.modal-bg');
let employees = [];



fetch('https://randomuser.me/api/?results=12')
.then(response => response.json())
.then(data => data.results)
.then(displayUsers);



function displayUsers(employeeData) { 
    employees = employeeData;
        let gridHtml = ``;
        employees.forEach((employee, index) => {
            gridHtml += `
                <div class='employee-card' data-index='${index}'>
                    <div class='pic-container'><img src='${employee.picture.large}' class='profile-pic'></div>
                    <div class='profile-info'>
                        <h3 class='name'>${employee.name.first} ${employee.name.last}</h3>
                        <span class='email'>${employee.email}</span>
                        <span class='city'>${employee.location.city}</span>
                    </div>
                </div>
            `;
            grid.innerHTML = gridHtml;
        });
}



function displayModal(index) {

        let date = new Date(employees[index].dob.date);

        let modalHtml = `
            <div class='modal-bg'>
                <div class='modal-content'>
                    <button class='close-modal' onclick="document.querySelector('.modal-bg').remove()">X</button>
                    <img src='${employees[index].picture.large}' class='profile-pic'>
                    <h3 class='name'>${employees[index].name.first} ${employees[index].name.last}</h3>
                    <span class='email'>${employees[index].email}</span>
                    <span class='city'>${employees[index].location.city}</span>
                    <hr>
                    <span class='phone'>${employees[index].phone}</span>
                    <div class='address'>
                        ${employees[index].location.street.number} 
                        ${employees[index].location.street.name}
                        ${employees[index].location.city}, 
                        ${employees[index].location.state} 
                        ${employees[index].location.postcode}
                    </div>
                    <span class='birth'>
                        Birthday: 
                        ${date.getMonth()}/
                        ${date.getDate()}/
                        ${date.getFullYear()}
                    </span>
                    
                </div>
            </div>
        `; 

        body.insertAdjacentHTML('afterbegin', modalHtml);
}


// Modal click event

        grid.addEventListener('click', event => {
                const card = event.target.closest('.employee-card');
                const index = card.getAttribute('data-index');
                if (card !== null) {
                    displayModal(index);
                    console.log(index);
                }
            })

const closeModal = document.querySelector('.close-modal');
