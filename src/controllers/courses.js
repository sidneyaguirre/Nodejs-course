var fs = require('fs');


const courses = () => {
    try {
        return cList = require('../../data/courses.json');
    } catch(err) {
        return cList = [];
    };
};

exports.listAvailableCourses = (req, res) => {
    let availableCourses = courses();
    let available = availableCourses.filter(est => est.status == "disponible");
    res.render('available_courses', { list: available });
};

const update = (info) => {
    const updatedStatus = JSON.stringify(info);
    fs.writeFile('data/courses.json', updatedStatus, (err) => {
        if(err) throw(err);
        console.log('Curso guardado correctamente');
    });
};

exports.listCourses = (req, res) => {
    res.render('all_courses', { list: courses() });
};

exports.courseDetails = (req, res) => {
    let list = courses();
    let info = list.find(subject => subject.id === req.params.id);
    res.render('course_details', { list: info });
};

exports.store = (req, res) => {
    let getCourses = courses();
    const course = {
        id: req.body.id,
        name: req.body.name,
        workload: req.body.workload,
        modality: req.body.modality,
        description: req.body.description,
        cost: req.body.cost,
        status: "disponible"
    };
    const exists = getCourses.find(search => search.id === course.id);
    if(!exists) {
        getCourses.push(course);
        const data = JSON.stringify(getCourses);
        fs.writeFile('data/courses.json', data, (err) => {
            if(err) throw(err);
        });
        res.render('all_courses', { list: courses(), success: 'Guardado con éxito' });
    } else {
        res.render('create_course', { failed: 'Ya existe un curso con ese identificador' });
    };

};

exports.updateCourseStatus = (req, res) => {
    const coursesList = courses();
    console.log(coursesList);

    const found = coursesList.find(search => search.id === req.params.id);
    console.log(found.status);

    if(found.status === 'cerrado') {
        found.status = 'disponible';
    } else if(found.status === 'disponible') {found.status = 'cerrado'};
    update(coursesList);
    res.render('all_courses', { list: courses() });
};