// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
document.addEventListener('DOMContentLoaded', () => {
(function () {
    const reviewTotalDisplay = document.querySelector('#reviews')
    const returningUserDisplay = document.querySelector('#returning-user')
    const userNameDisplay = document.querySelector('#user')

    let isOpen : boolean


const reviews : {
    name: string,
    stars: number,
    loyaltyUser: boolean,
    date: string,
} [] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];

const you: {
    firstName: string,
    lastName: string,
    isReturning: boolean,
    age: number,
    stayedAt: string[];
} = {
    firstName: 'James',
    lastName: 'Franco',
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
    contactDetails: string,
    isAvailable: boolean,
} [] = [
    {
        image: 'property1.jpg',
        title: 'Beachfront Bungalow',
        pricePerNight: 50,
        location: {
            addressLine1: '123 Ocean Drive',
            city: 'Miami',
            postalCode: '33139',
            country: 'USA',
        },
        contactDetails: 'info@beachbungalow.com',
        isAvailable: true,
    },
    {
        image: 'property2.jpg',
        title: 'Mountain Cabin',
        pricePerNight: 75,
        location: {
            addressLine1: '456 Alpine Trail',
            city: 'Aspen',
            postalCode: '81611',
            country: 'USA',
        },
        contactDetails: 'contact@mountaincabin.com',
        isAvailable: false,
    },
    {
        image: 'property3.jpg',
        title: 'City Apartment',
        pricePerNight: 60,
        location: {
            addressLine1: '789 Urban Street',
            city: 'New York',
            postalCode: '10001',
            country: 'USA',
        },
        contactDetails: 'rent@cityapartment.com',
        isAvailable: true,
    },
];


function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
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
})();


});

