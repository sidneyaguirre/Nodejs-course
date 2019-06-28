const express = require('express');
const router = express.Router();
const courseController = require('./controllers/courses');
const enrollmentController = require('./controllers/enrollment');

router.get('/available_courses', courseController.listAvailableCourses);
router.get('/all_courses', courseController.listCourses);
router.get('/course_details/:id', courseController.courseDetails);
router.get('/create_course', (req, res) => {
    console.log(req.param.toString);
    res.render('create_course')
});
router.get('/update_course_status/:id', courseController.updateCourseStatus);
router.post('/store_course', courseController.store);

router.get('/signed_people', enrollmentController.people);
router.get('/enrolled/:id', enrollmentController.registeredPeople);
router.get('/signup/:id', enrollmentController.signup);
router.get('/deleted_people/:course/:document', enrollmentController.removePersonFromCourse);
router.post('/store_student', enrollmentController.signing);

router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;