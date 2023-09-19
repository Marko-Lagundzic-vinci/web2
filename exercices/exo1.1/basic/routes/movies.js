var express = require('express');
var router = express.Router();

const MENU = [
    {
        id: 1,
        title: 'The Father',
        duration: 97,
        budget: 100,
        link: 'https://fr.wikipedia.org/wiki/The_Father_(film,_2020)',
    },
    {
        id: 2,
        title: 'Sept Vies',
        duration: 123,
        budget: 23,
        link: 'https://fr.wikipedia.org/wiki/Sept_Vies',
    },
    {
        id: 3,
        title: 'La loi du marché',
        duration: 106,
        budget: 17,
        link: 'https://fr.wikipedia.org/wiki/La_Loi_du_march%C3%A9',
    },
];

// Read all the movies from the menu
router.get('/', (req, res, next) => {
    console.log('GET /movies');
    res.json(MENU);
});

module.exports = router;