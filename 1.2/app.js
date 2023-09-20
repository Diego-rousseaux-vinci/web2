var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var filmsRouter = require('./routes/films');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/films', filmsRouter);


const requestStats = {};

app.use((req, res, next) => {
  // Incrémenter le compteur global de requêtes
  if (!requestStats.total) {
    requestStats.total = 1;
  } else {
    requestStats.total++;
  }

  // Catégoriser les requêtes par PATH et par méthode HTTP
  const path = req.path;
  const method = req.method;
  const key = `${method}:${path}`;

  if (!requestStats[key]) {
    requestStats[key] = 1;
  } else {
    requestStats[key]++;
  }

  // Afficher les statistiques dans la console
  console.log('Statistiques des requêtes :');
  console.log('--------------------------');
  console.log(`Nombre total de requêtes : ${requestStats.total}`);
  console.log(`nombre de get : ${requestStats.method}`)
    
    next();
  });

module.exports = app;
