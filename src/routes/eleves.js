const router = require('express').Router();

const eleveController = require('../controllers/elevesController');

router.get('/', eleveController.list);
router.post('/add', eleveController.save);
router.get('/update/:id', eleveController.edit);
router.post('/update/:id', eleveController.update);
router.get('/delete/:id', eleveController.delete);

module.exports = router;