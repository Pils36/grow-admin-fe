const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('./pages/home/index');
});
router.get('/earnings', (req, res) => {
	res.render('./pages/home/earnings');
});
router.get('/analytics', (req, res) => {
	res.render('./pages/home/analytics');
});
router.get('/fans', (req, res) => {
	res.render('./pages/home/fans');
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

router.get('/celebearnings', (req, res) => {
	res.render('./pages/home/celebrityearning');
});

router.get('/becueddeduction', (req, res) => {
	res.render('./pages/home/becueddeduction');
});

router.get('/transactionhistory', (req, res) => {
	res.render('./pages/home/transactionhistory');
});

router.get('/celebbanks', (req, res) => {
	res.render('./pages/home/celebbanks');
});

router.get('/addedcards', (req, res) => {
	res.render('./pages/home/addedcards');
});

router.get('/withdrawalrequest', (req, res) => {
	res.render('./pages/home/withdrawalrequest');
});

router.get('/withdrawalprocessed', (req, res) => {
	res.render('./pages/home/withdrawalprocessed');
});

router.get('/waitlist', (req, res) => {
	res.render('./pages/home/waitlist');
});

router.get('/talents', (req, res) => {
	res.render('./pages/home/talents');
});

router.get('/partners', (req, res) => {
	res.render('./pages/home/partners');
});

module.exports = router;
