var fs = require('fs');


const courses = () => {
    try {
        return cList = require('../data/courses.json');
    }catch(err){
        return cList = [];
    };
};

exports.listAvailableCourses = (req, res) => {
    let availableCourses = courses();
    let available = availableCourses.filter(est => est.status == "disponible");
    res.render('available_courses', {list: available});
};

exports.listCourses = (req, res) => {
    res.render('all_courses', {list: courses()});
};

exports.courseDetails = (req, res) => {
    let list = courses();
    let info = list.find(subject => subject.id === req.params.id);
    res.render('course_details', {list: info});
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
    if(!exists){
        getCourses.push(course);
        const data = JSON.stringify(getCourses);
        fs.writeFile('data/courses.json', data, (err) => {
            if(err) throw (err);
        });
        res.render('all_courses', {list: courses(), success: 'Guardado con éxito'});
    }else{
        res.render('create_course', {failed: 'Ya existe un curso con ese identificador'});
    };

};
