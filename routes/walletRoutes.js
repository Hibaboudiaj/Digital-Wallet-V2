const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");
const checkBalance = require("../middlewares/validateAmount");

router.post("/", walletController.createWallet);
router.get("/", walletController.getWallets);
router.get("/:id", walletController.getWalletById);
router.put("/:id", walletController.updateWallet);
router.delete("/:id", walletController.deleteWallet);

router.post("/:id/deposit", walletController.deposit);
router.post("/:id/withdraw",checkBalance, walletController.withdraw);

module.exports = router;