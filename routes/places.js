const express = require('express');
const PlaceController = require('../controllers/places');
const wrapAsync = require('../utils/wrapAsync')
const  isValidObjectId  = require('../middlewares/isValidObjectId');
const isAuth = require('../middlewares/isAuth');
const { isAuthorPlace } = require('../middlewares/isAuthor');
const router = express.Router();
const { validatePlace } = require('../middlewares/validator');
const upload = require('../config/multer');

router.route('/')
    .get(wrapAsync(PlaceController.index))
    .post(isAuth, upload.array('image', 5), validatePlace, wrapAsync(PlaceController.store));
    

router.get('/create', isAuth, (req, res, next) =>{
    res.render('places/create')
})

router.route('/:id')
    .get(isValidObjectId('/places'), wrapAsync(PlaceController.show))
    .put(isAuthorPlace, isAuth, isValidObjectId('/places'),  upload.array('image', 5), validatePlace, wrapAsync(PlaceController.update))
    .delete(isAuthorPlace, isAuth, isValidObjectId('/places'), wrapAsync(PlaceController.destroy));


router.get('/:id/edit', isAuthorPlace, isAuth, isValidObjectId('/places'), wrapAsync(PlaceController.edit));

router.delete('/:id/images', isAuth,isAuthorPlace,isValidObjectId('/places'), wrapAsync(PlaceController.destroyImage))

module.exports = router;