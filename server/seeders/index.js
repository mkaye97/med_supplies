const db = require('../config/connection');
const { User, Category, Charity, Product } = require('../models');
const usersData = require('./usersData.json');
const productsData = require('./productsData.json');
const charitiesData = require('./charitiesData.json');
const categoriesData = require('./categoriesData.json');

db.once('open', async () => {
  try {
      
    await Category.deleteMany({});
    await User.deleteMany({});
    await Product.deleteMany({});
    await Charity.deleteMany({});

    await User.create(usersData);
    await Category.create(categoriesData);
    await Product.create(productsData);
    await Charity.create(charitiesData);

   
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
