// middlewares/checkBalanceMiddleware.js
const {wallets} = require("../data/data"); // adjust the path to your wallets array/file


const checkBalance = (req, res, next) => {
  const id = parseInt(req.params.id);
  const { amount } = req.body;

  const wallet = wallets.find((w) => w.id === id);

  if (!wallet) {
    return res.status(404).json({ message: "Wallet not found" });
  }

  if (wallet.sold < amount) {
    return res.status(400).json({ message: "Insufficient balance" });
  }

  req.wallet = wallet; // pass wallet to controller
  next();
};

module.exports = checkBalance;