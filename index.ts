// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
document.addEventListener('DOMContentLoaded', () => {
(function () {
    const reviewTotalDisplay = document.querySelector('#reviews')
    const returningUserDisplay = document.querySelector('#returning-user')
    const userNameDisplay = document.querySelector('#user')
    const propertyContainer = document.querySelector('.properties')
    const footer = document.querySelector('.footer');

    let isLoggedIn : boolean

    let isOpen : boolean

    enum LoyaltyUser {
        GOLD_USER,
        SILVER_USER,
        BRONZE_USER
    }


    const reviews : any[]= [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '27-03-2021',
        description: 'Great place to stay'
    },
];

// const you: {
//     firstName: string,
//     lastName: string,
//     isReturning: boolean,
//     age: number,
//     stayedAt: string[];
// } = {
//     firstName: 'James',
//     lastName: 'Franco',
//     isReturning: true,
//     age: 33,
//     stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
// };

const ADMIN = 'admin'
const READ_ONLY = 'read-only'


enum Permissions {
    ADMIN,
    READ_ONLY
}


const you = {
    firstName: 'James',
    lastName: 'Franco',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 33,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};


// Array of property objects
const properties: {
    image: string,
    title: string,
    pricePerNight: number,
    location: {
        addressLine1: string,
        city: string,
        postalCode: string,
        country: string,
    },
    contactDetails: [number, string],
    isAvailable: boolean,
} [] = [
    {
        image: 'images/property1.jpg',
        title: 'Beachfront Villa',
        pricePerNight: 50,
        location: {
            addressLine1: '123 Ocean Drive',
            city: 'Miami',
            postalCode: '33139',
            country: 'USA',
        },
        contactDetails: [ +1123495082908, 'info@beachbungalow.com'],
        isAvailable: true,
    },
    {
        image: 'images/property2.jpg',
        title: 'Mountain Cabin',
        pricePerNight: 75,
        location: {
            addressLine1: '456 Alpine Trail',
            city: 'Aspen',
            postalCode: '81611',
            country: 'USA',
        },
        contactDetails: [ +1123495082908, 'contact@mountaincabin.com'],
        isAvailable: false,
    },
    {
        image: 'images/property3.jpg',
        title: 'City Apartment',
        pricePerNight: 60,
        location: {
            addressLine1: '789 Urban Street',
            city: 'New York',
            postalCode: '10001',
            country: 'USA',
        },
        contactDetails: [ +1123495082908, 'rent@cityapartment.com'],
        isAvailable: true,
    },
];


function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ?  '⭐' : '';
    if (reviewTotalDisplay) {
        // combine values into a string
        reviewTotalDisplay.innerHTML = 
            'Review total: ' + value.toString() + ', first reviewed by: ' + reviewer + ' ' + iconDisplay;
    } else {
        console.error('No element found');
    }
}

// function to populate the user welcome back message
function populateUser(isReturning: boolean, userName: string) {
    if (returningUserDisplay) {
        if (isReturning) {
            returningUserDisplay.innerHTML = 'back';
        }
    }
    if (userNameDisplay) {
        userNameDisplay.innerHTML = userName;
    }
}



// Call the function with the number of reviews and the first reviewer's name
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);

let authorityStatus : any

isLoggedIn = true

function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       element.appendChild(priceDisplay)
   }
}

//Add the properties to the page
if (propertyContainer) {
    for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML =  properties[i].title
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
    showDetails(isLoggedIn, card, properties[i].pricePerNight);
}
} else {
    console.error('No element found');
}

let currentLocation: [string, string, number] = ['Stellenbosch', '13:06', 31]
if (footer) {
    footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°C';
} else {
    console.error('No element found');
}



})();


});

// function add(firstValue : (number | string), secondValue: (number | string)) {
//     let result
//     if (typeof firstValue === 'number' && typeof secondValue === 'number') {
//         result = firstValue + secondValue
//     }
//     if (typeof firstValue === 'string' && typeof secondValue === 'string') {
//         result = firstValue + ' ' + secondValue
//     }
//     if (typeof firstValue === 'number' && typeof secondValue === 'string') {
//         console.log('cannot perform this addition')
//     }
//     if (typeof firstValue === 'string' && typeof secondValue === 'number') {
//         console.log('cannot perform this addition')
//     }
// }

// const combinedReviews = add(5,1)
// const firstNameLastName = add('Ania', 'Kubow')