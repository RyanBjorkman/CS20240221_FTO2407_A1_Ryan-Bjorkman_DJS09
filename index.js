// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
document.addEventListener('DOMContentLoaded', function () {
    (function () {
        var reviewTotalDisplay = document.querySelector('#reviews');
        var returningUserDisplay = document.querySelector('#returning-user');
        var userNameDisplay = document.querySelector('#user');
        var propertyContainer = document.querySelector('.properties');
        var footer = document.querySelector('.footer');
        var isOpen;
        var reviews = [
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
        var ADMIN = 'admin';
        var READ_ONLY = 'read-only';
        var Permissions;
        (function (Permissions) {
            Permissions[Permissions["ADMIN"] = 0] = "ADMIN";
            Permissions[Permissions["READ_ONLY"] = 1] = "READ_ONLY";
        })(Permissions || (Permissions = {}));
        var you = {
            firstName: 'James',
            lastName: 'Franco',
            permissions: Permissions.ADMIN,
            isReturning: true,
            age: 33,
            stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
        };
        // Array of property objects
        var properties = [
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
                contactDetails: [+1123495082908, 'info@beachbungalow.com'],
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
                contactDetails: [+1123495082908, 'contact@mountaincabin.com'],
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
                contactDetails: [+1123495082908, 'rent@cityapartment.com'],
                isAvailable: true,
            },
        ];
        function showReviewTotal(value, reviewer, isLoyalty) {
            var iconDisplay = isLoyalty ? '⭐' : '';
            if (reviewTotalDisplay) {
                // combine values into a string
                reviewTotalDisplay.innerHTML =
                    'Review total: ' + value.toString() + ', first reviewed by: ' + reviewer + ' ' + iconDisplay;
            }
            else {
                console.error('No element found');
            }
        }
        // function to populate the user welcome back message
        function populateUser(isReturning, userName) {
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
        //Add the properties to the page
        if (propertyContainer) {
            for (var i = 0; i < properties.length; i++) {
                var card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = properties[i].title;
                var image = document.createElement('img');
                image.setAttribute('src', properties[i].image);
                card.appendChild(image);
                propertyContainer.appendChild(card);
            }
        }
        else {
            console.error('No element found');
        }
        var currentLocation = ['Stellenbosch', '13:06', 31];
        if (footer) {
            footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°C';
        }
        else {
            console.error('No element found');
        }
    })();
});
