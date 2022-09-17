const express = require("express");
const customersCtrl = require("../controllers/customersCtrl");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post('/', auth, customersCtrl.addCustomer);
router.get('/', auth, customersCtrl.getCustomers);
router.get('/:customerName', auth, customersCtrl.getCustomerOrders);

module.exports = router;
