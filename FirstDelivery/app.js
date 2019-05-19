const { courses } = require('./courses');

const fs = require('fs')

/* Declares the details of the enrollment: 
course id, name of the interested person & 
citizen card id number */
signup = {
    name: {
        alias: 'n',
        demand: true,
    },
    idnumber: {
        alias: 'i',
        demand: true,
    },
    courseid: {
        alias: 'c',
        demand: true,
    }
}

/* allows the implementation of the command line for the enrollment */
const argv = require('yargs')
    .command('inscribir', 'enroll a course', signup)
    .argv

/* Print all the courses offered and their information */
//function definition: 
let showCourses = () => {
    for(let i = 0; i < courses.length; i++) {
        setTimeout(function() {
            console.log(courses[i])
        }, i * 2000);
    };
}; //function calling:
//showCourses();


/* To find a course given its id */
//function definition: 
function find_subject(a) {
    let subject = courses.find(subject => subject.id === a);
    if(subject == undefined) {
        console.log('No existe el curso con el id ' + a + '. Por favor verifique la informacion')
    }
    return subject;
};


/* Creation of the file within the details of the enrollment */
//function definition: 
let signup_file = (course, name, identification) => {
    /* gets the id provided by the person who wants to enroll the course */
    let ci = course;
    let ip = name;
    let idn = identification;
    let subject = find_subject(ci);
    if(subject == undefined) {
        console.log('No es posible realizar la inscripcion')
        return;
    };
    /* Creates the text for the file */
    let enrollmentDetails = 'Nombre del estudiante: ' + ip + '\n' +
        'Cédula del estudiante: ' + idn + '\n' + 'Id del curso: ' + subject.id + '\n' +
        'Materia: ' + subject.name + '\n' +
        'Duracion: ' + subject.duration + '\n' +
        'Costo: ' + subject.cost + '\n';
    let filename = 'prematricula' + ip + idn;
    let filepath = './enrollments/' + filename;
    fs.writeFile(filepath, enrollmentDetails, (err) => {
        if(err) throw err;
        console.log('Inscripción realizada.');
    });
};

/* gets the id of the course provided by the person who wants to enroll the course */
let ci = argv.courseid;
/* gets the name of the person who wants to enroll the course */
let ip = argv.name;
/* gets the identification number of the person who wants to enroll the course */
let idn = argv.idnumber;

/* Creates the enrollment file with the course information and interested person */
signup_file(ci, ip, idn);