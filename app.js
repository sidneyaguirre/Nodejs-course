const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const courses = require('./src/courses');
const enrollment = require('./src/enrollment');
const bodyParser = require('body-parser');

const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));
app.use(bodyParser.urlencoded({ extended: false }));
const partials = path.join(__dirname, 'partials');
hbs.registerPartials(partials);

//const helpers = path.join(__dirname, 'helpers');

/* hbs Configuration, it looks for files in views directory */
app.set('view engine', 'hbs');

app.get('/available_courses', courses.listAvailableCourses);
app.get('/all_courses', courses.listCourses);
app.get('/course_details/:id', courses.courseDetails);
app.get('/create_course', (req, res) => {
    res.render('create_course')
});
app.get('/registered', enrollment.people);
app.get('/enrolled/:id', enrollment.registeredPeople);
app.get('/signup/:id', (req, res) => {
    res.render('signup')
});

app.post('/store_course', courses.store);
app.post('/deleted_people', enrollment.people);
app.post('/store_student', enrollment.signing);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
});
