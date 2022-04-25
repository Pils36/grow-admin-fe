const express = require('express');

const router = express.Router();

const {
	celebrityEarning,
	becuedEarnings,
	becuedEscrow,
	becuedTransxHistory
} = require('../controllers/EarningController');
const { withdrawlRequest, withdrawlProcessed } = require('../controllers/BankingController');

const { getAllSentMessages } = require('../controllers/MessagingController');

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

router.get('/celebearnings', celebrityEarning);

router.get('/becueddeduction', becuedEarnings);

router.get('/becuedescrow', becuedEscrow);

router.get('/transactionhistory', becuedTransxHistory);

router.get('/celebbanks', (req, res) => {
	res.render('./pages/home/celebbanks');
});

router.get('/addedcards', (req, res) => {
	res.render('./pages/home/addedcards');
});

router.get('/withdrawalrequest', withdrawlRequest);

router.get('/withdrawalprocessed', withdrawlProcessed);

router.get('/sentmessages', getAllSentMessages);

router.get('/waitlist', (req, res) => {
	res.render('./pages/home/waitlist');
});

router.get('/talents', (req, res) => {
	res.render('./pages/home/talents');
});

router.get('/partners', (req, res) => {
	res.render('./pages/home/partners');
});

router.get('/fansprofile', (req, res) => {
	res.render('./pages/home/fanprofile');
});

router.get('/fanstransactionhistory', (req, res) => {
	res.render('./pages/home/fantransactionhistory');
});

router.get('/fansaccountactivity', (req, res) => {
	res.render('./pages/home/fanactivitylog');
});

router.get('/celebsprofile', (req, res) => {
	res.render('./pages/home/celebprofile');
});

router.get('/celebstransactionhistory', (req, res) => {
	res.render('./pages/home/celebtransactionhistory');
});

router.get('/celebsaccountactivity', (req, res) => {
	res.render('./pages/home/celebactivitylog');
});

module.exports = router;
