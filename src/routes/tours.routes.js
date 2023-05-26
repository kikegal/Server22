import {Router} from 'express'
import {getTours, createTour, updateTour, deleteTour, getToursById} from '../controllers/tours.controllers.js'


const router = Router()

//router.get('/tours/:id', getTours1)
router.get('/tours', getTours)

router.get('/tours/:id', getToursById)

router.post('/tours', createTour)

router.patch('/tours/:id', updateTour)

router.delete('/tours/:id', deleteTour)

export default router