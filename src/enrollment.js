var fs = require('fs');

const courses = () => {
    try {
        return cList = require('../data/courses.json');
    } catch(err) {
        return cList = [];
    };
};

const students = () => {
    try {
        return studentsList = require('../data/registered.json');
    } catch(err) {
        return studentsList = [];
    };
};

const enrolledPerCourse = () => {
    try {
        return studentsList = require('../data/students_per_course.json');
    } catch(err) {
        return studentsList = [];
    };
};

exports.people = (req, res) => {
    let availableCourses = courses();
    let available = availableCourses.filter(est => est.status == "disponible");
    res.render('registered', { list: available });
};

exports.registeredPeople = (req, res) => {
    let enrolledPeople = []
    let list = students();
    let inCourse = enrolledPerCourse()
    let signed = inCourse.filter(subject => subject.course_id == req.params.id);
    if(signed) {
        list.forEach(person => {
            signed.forEach(personRegistered => {
                if(person.document == personRegistered.person_id) {
                    enrolledPeople.push(person);
                };
            });
        });
        res.render('enrolled', { list: enrolledPeople });
    };
};

exports.allPeople = () => {
    res.render('registered', { list: students() });
}


exports.signing = (req, res) => {
    let getPeople = students();
    let getstudentsPerCourse = enrolledPerCourse();
    let course = req.params.id;
    const studentCourse = {
        person_id: req.body.document,
        course_id: course,
    }
    const student = {
        document: req.body.document,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
    };
    const signed = getstudentsPerCourse.find(person => person.person_id === studentCourse.person_id);
    const exists = getPeople.find(search => search.document === student.document);
    if(!exists) {
        getPeople.push(student);
        const data = JSON.stringify(getPeople);
        fs.writeFile('data/registered.json', data, (err) => {
            if(err) throw(err);
        });
        res.render('successful_signing', { success: 'Guardado con éxito' });
    } else {
        res.render('error', { failed: 'error' });
    };
    if(!signed) {
        getstudentsPerCourse.push(studentCourse);
        const infoEnroll = JSON.stringify(getstudentsPerCourse);
        fs.writeFile('data/students_per_course.json', infoEnroll, (err) => {
            if(err) throw(err);
        });
        res.render('successful_signing', { success: 'Guardado con éxito' });
    } else {
        res.render('error', { failed: 'error' });
    };

};


exports.deletePeople = (req, res) => {
    let studentToDelete = req.body.document;
    let inCourse = enrolledPerCourse()
    let signed = inCourse.filter(person => person.document !== studentToDelete);
    if(signed) {
        fs.writeFile('../data/students_per_course.json', signed, (err) => {
            if(err) throw(err);
        });
        people();
    };
};