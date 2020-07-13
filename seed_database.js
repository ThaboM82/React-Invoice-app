var path = require('path'),
    db_models = require('./db_models'),
    Sequelize = require('sequelize');

sequelize.sync().then(function() {
  Customer.create({
    name: "Zweli Zulu",
    address: "35 Denton St, Bassonia 2092",
    phone: "+27 670410755"
  });

  Customer.create({
    name: "Mary Smith",
    address: "115 Flamegrill St, Parktown  JHB 2004",
    phone: "072-534-2342"
  });

  Customer.create({
    name: "Chris Swanepool",
    address: "90 Main St, Montana PTA 3940",
    phone: "084-400-7910"
  });

  Product.create({
    name: "Parachute Pants",
    price: 29.99
  });

  Product.create({
    name: "Phone Holder",
    price: 9.99
  });

  Product.create({
    name: "Pet Rock",
    price: 5.99
  });

  Product.create({
    name: "Egg Timer",
    price: 15.99
  });

  Product.create({
    name: "Neon Green Hat",
    price: 21.99
  });

}).catch(function(e) {
  console.log("ERROR SYNCING WITH DB", e);
});
