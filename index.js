// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
document.addEventListener('DOMContentLoaded', function () {
    (function () {
        var reviewTotalDisplay = document.querySelector('#reviews');
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
        function showReviewTotal(value, reviewer) {
            if (reviewTotalDisplay) {
                // combine values into a string
                reviewTotalDisplay.innerHTML =
                    'Review total: ' + value.toString() + ', first reviewed by: ' + reviewer;
            }
            else {
                console.error('No element found');
            }
        }
        // Call the function with the number of reviews and the first reviewer's name
        showReviewTotal(reviews.length, reviews[0].name);
    })();
});
