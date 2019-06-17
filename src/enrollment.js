var fs = require('fs');

/* to see all the courses */
const courses = () => {
    try {
        return cList = require('../data/courses.json');
    } catch(err) {
        return cList = [];
    };
};

/* To see all the registered people */
const students = () => {
    try {
        return studentsList = require('../data/registered.json');
    } catch(err) {
        return studentsList = [];
    };
};


/* To see the relation between course and enrolled person */
const enrolledPerCourse = () => {
    try {
        return enrolled = require('../data/students_per_course.json');
    } catch(err) {
        return enrolled = [];
    };
};

const savePerson = (person) => {
    const data = JSON.stringify(person);
        fs.writeFile('data/registered.json', data, (err) => {
            if(err) throw(err);
            console.log(`registered successful`)
        });
}

const saveEnrollment = (info) => {
    const infoEnroll = JSON.stringify(info);
    fs.writeFile('data/students_per_course.json', infoEnroll, (err) => {
        if(err) throw(err);
        console.log(`enrollment successful`)
    });
}

/* To see all the available courses */
exports.people = (req, res) => {
    let availableCourses = courses();
    let available = availableCourses.filter(est => est.status == "disponible");
    res.render('registered', { list: available });
};

/* To see the people registered in A SPECIFIC Course */
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

/* To render all the registered people */
exports.allPeople = () => {
    res.render('registered', { list: students() });
};

exports.signup = (req, res) => {
    let list = courses();
    let info = list.find(subject => subject.id === req.params.id);
    res.render('signup', { list: info });
};


/* To make the enrollment process */
exports.signing = (req, res) => {
    const getPeople = students();
    const getStudentsPerCourse = enrolledPerCourse();
console.log(getStudentsPerCourse);

    const studentCourse = {
        person_id: req.body.document,
        course_id: req.body.course_id,
    }
    const student = {
        document: req.body.document,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
    };
console.log(`param: ${req.body.course_id}`);

    const exists = getPeople.find(person => person.document === student.document);
    const alreadysigned = getStudentsPerCourse.filter(search => 
        search.person_id === req.body.document && search.course_id ===  req.body.course_id);
    console.log(exists);
    console.log(`resultado de existe: ${alreadysigned}`);

    if(!exists) {
        getPeople.push(student);
        savePerson(getPeople)
        getStudentsPerCourse.push(studentCourse);
        saveEnrollment(getStudentsPerCourse)
        res.render('successful', { success: 'Guardado con éxito' });
    } else if(exists) {
        if(alreadysigned.length === 0) {
            getStudentsPerCourse.push(studentCourse);
            saveEnrollment(getStudentsPerCourse)
            res.render('successful', { success: 'Guardado con éxito' });
        } else {
            res.render('unsuccessful', { failed: 'error' });
        };
    };
}

/* To delete a person registered in a course */
exports.removeFromCourse = (req, res) => {
    let coursePerson = enrolledPerCourse();
    const newData = coursePerson.filter(search => !(
      search.course_id === req.params.course_id && search.person_id === req.params.person_id));
    coursePerson = newData;
    console.log(newData);
    //saveCoursesPerPerson(coursePerson);
    res.redirect('registered');
  };

exports.updateCourseStatus = (req, res) => {
    const coursesList = allCourses();
  
    const found = coursesList.find(search => search.id === req.params.id);
    if (found.state = 'cerrado') {
      found.state = 'disponible'
    } else found.state = 'cerrado'
  
    saveCourse(coursesList);
    res.redirect('/courses');
  };
  