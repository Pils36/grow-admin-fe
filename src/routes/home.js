const express = require('express');

const router = express.Router();

const { getAllSentMessages } = require('../controllers/MessagingController');

const { getIndustryList, frequentlyAskedQuestions, celebrityProfileInformation, useranalyticInformation } = require('../controllers/GeneralController');

router.get('/', (req, res) => {
	res.render('./pages/home/index');
});
router.get('/earnings', (req, res) => {
	res.render('./pages/home/earnings');
});
router.get('/useranalytics', useranalyticInformation);

router.get('/createkbs', (req, res) => {
	res.render('./pages/kbs/create')
});

router.get('/createcrops', (req, res) => {
	res.render('./pages/crop/create')
});


router.get('/user', (req, res) => {
	res.render('./pages/home/user');
});
router.get('/celebs', (req, res) => {
	res.render('./pages/home/celebs');
});
router.get('/booking', (req, res) => {
	res.render('./pages/home/booking');
});
router.get('/acceptedbookings', (req, res) => {
	res.render('./pages/home/acceptedbookings');
});
router.get('/pendingbookings', (req, res) => {
	res.render('./pages/home/pendingbookings');
});
router.get('/declinedbookings', (req, res) => {
	res.render('./pages/home/declinedbookings');
});

router.get('/celebbanks', (req, res) => {
	res.render('./pages/home/celebbanks');
});

router.get('/addedcards', (req, res) => {
	res.render('./pages/home/addedcards');
});


router.get('/sentmessages', getAllSentMessages);

router.get('/category-list', getIndustryList);

router.get('/faq', frequentlyAskedQuestions);

router.get('/waitlist', (req, res) => {
	res.render('./pages/home/waitlist');
});

router.get('/talents', (req, res) => {
	res.render('./pages/home/talents');
});

router.get('/partners', (req, res) => {
	res.render('./pages/home/partners');
});

router.get('/userprofile', (req, res) => {
	res.render('./pages/home/userprofile');
});


router.get('/useraccountactivity', (req, res) => {
	res.render('./pages/home/useractivitylog');
});

router.get('/celebsprofile', (req, res) => {
	res.render('./pages/home/celebprofile');
});

router.get('/profile-edit', celebrityProfileInformation);

router.get('/celebstransactionhistory', (req, res) => {
	res.render('./pages/home/celebtransactionhistory');
});

router.get('/celebsaccountactivity', (req, res) => {
	res.render('./pages/home/celebactivitylog');
});

router.post('/uploadfile', (req, res) => {
	console.log(req);
});

module.exports = router;
