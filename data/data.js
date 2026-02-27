// let users = [];
// let wallets = [];

const users = [
  {
    id: 1,
    name: "travis",
    email: "travis@example.com",
    phone: "1234567890",
  },
  {
    id: 2,
    name: "travis",
    email: "travis@example.com",
    phone: "1234567890",
  },
  {
    id: 3,
    name: "travis",
    email: "travis@example.com",
    phone: "1234567890",
  },
];

const wallets = [
  {
    id: 1,
    user_id: 1,
    name: "Updated Wallet",
    sold: 0,
  },
  {
    id: 2,
    user_id: 1,
    name: "mehdi",
    sold: 0,
  },
  {
    id: 3,
    user_id: 1,
    name: "hiba",
    sold: 0,
  },
];

module.exports = { users, wallets };
