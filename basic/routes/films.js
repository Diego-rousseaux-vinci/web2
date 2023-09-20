var express = require('express');
var router = express.Router();

const film = [
  {
    id: 1,
    title: 'interstelar',
    duration: '2h30',
    budget: '1 milliard',
    link: 'film.streaming.interstellar',

  },
  {
    id: 2,
    title: 'pacific rim',
    duration: '2h25',
    budget: '500 million',
    link: 'film.streaming.pacific_rim',
  },
  {
    id: 3,
    title: 'real steel',
    duration: '2h',
    budget: '100 million',
    link: 'film.streaming.real_steel',
  },
 
];


router.get('/', (req, res, next) => {
  console.log('get /pizza')
  res.json(film);
});

module.exports = router;
