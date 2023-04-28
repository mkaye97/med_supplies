const db = require('../config/connection');
const { User, Category, Charity, Product } = require('../models');
const charitiesData = require('./charitiesData.json');
//const mongoose = require('mongoose');

db.once('open', async () => {
  try {


    await Charity.deleteMany({});

    await Category.deleteMany({});
    const categories = await Category.insertMany([
      { name: 'First Aid' },
      { name: 'PPE' },
      { name: 'Devices' },
      { name: 'Tests' },
      { name: 'Books' },
      { name: 'Wheelchairs' },
    ]);
    console.log('categories seeded');


    await Product.deleteMany({});
    const products = await Product.insertMany([
      {
        name: "First Aid Kit(216 Pieces)",
        description: "A comprehensive first aid kit containing 216 essential items for emergency situations.",
        image: "americanredcross_firstaidkit.jpg",
        price: 34.99,
        quantity: 10,
        category: categories[0]._id,
        isRentable: false,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Mask",
        description: "50 Pcs Disposable 4-ply Non- Woven Face Mask",
        image: "blackmask.jpg",
        price: 5.99,
        quantity: 10,
        category: categories[1]._id,
        isRentable: false,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Blood Pressure Monitor",
        description: "Blood Pressure Monitor for Upper Arm Large w / LED Screen",
        image: "bloodpressure_monitor.jpg",
        price: 45.99,
        quantity: 10,
        category: categories[2]._id,
        isRentable: true,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {
        name: "BlueTooth Blood Pressure Monitor",
        description: "Bluetooth Blood Pressure Monitors for Home Use",
        image: "bluetoothbloodpressure.jpg",
        price: 65.99,
        quantity: 10,
        category: categories[2]._id,
        isRentable: true,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {
        name: "Pregnancy Test",
        description: "Can tell you results 6 days sooner than your missed period",
        image: "clearbluepregotest3.jpg",
        price: 12.99,
        quantity: 40,
        category: categories[3]._id,
        isRentable: false,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Dual Head Stethoscope",
        description: "This is product 2",
        image: "dualheadstethoscope.jpg",
        price: 15.99,
        quantity: 10,
        category: categories[2]._id,
        isRentable: true,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "First Aid Kit(193 Pieces)",
        description: "Milwaukee PACKOUT Class B Type III First Aid Kit",
        image: "firstaidkit_milwa.png",
        price: 5.99,
        quantity: 10,
        category: categories[0]._id,
        isRentable: false,
        rentalPrice: 6.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Force Mech Electric Wheelchair",
        description: "A versatile and comfortable electric wheelchair designed for easy mobility.",
        image: "forcemech.jpg",
        price: 1799.00,
        quantity: 10,
        category: categories[5]._id,
        isRentable: true,
        rentalPrice: 99.00,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "MDF Stethoscope",
        description: "A professional - grade stethoscope with excellent acoustic performance.",
        image: "mdf_stethoscope.jpg",
        price: 49.99,
        quantity: 10,
        category: categories[2]._id,
        isRentable: true,
        rentalPrice: 9.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Multifunctional Children's Wheelchair",
        description: "An adjustable and ergonomic wheelchair designed specifically for children.",
        image: "multifunctionalchildrenschair.jpg",
        price: 599.00,
        quantity: 10,
        category: categories[5]._id,
        isRentable: true,
        rentalPrice: 49.00,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Tenice Multi - Color Masks",
        description: "A pack of multi - colored, comfortable masks for personal protection.",
        image: "tenicemasks.jpg",
        price: 14.99,
        quantity: 10,
        category: categories[1]._id,
        isRentable: false,
        rentalPrice: 4.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Ultra - lightweight Wheelchair",
        description: "A lightweight wheelchair designed for ease of use and maneuverability.",
        image: "ultralightwheelchair.jpg",
        price: 699.00,
        quantity: 10,
        category: categories[5]._id,
        isRentable: true,
        rentalPrice: 29.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Binax COVID test",
        description: "Antigen self test",
        image: "binaxcovidtest.jpg",
        price: 24.99,
        quantity: 10,
        category: categories[3]._id,
        isRentable: false,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Bose Hearing Aids",
        description: "Bose Hearing Aids",
        image: "bosshearingaids.jpg",
        price: 895.99,
        quantity: 10,
        category: categories[2]._id,
        isRentable: false,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "UV Light Sanitizer",
        description: "Disinfect anywhere your vehicle, sofa, phone, and more",
        image: "uvsanitizerlamp.jpg",
        price: 35.99,
        quantity: 15,
        category: categories[2]._id,
        isRentable: true,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 5
      },
      {

        name: "Baby bottle UV Sterilizer",
        description: "You can sterilize your baby's bottle with this",
        image: "uvsterilizerbabybottles.jpg",
        price: 125.99,
        quantity: 10,
        category: categories[2]._id,
        isRentable: true,
        rentalPrice: 20.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Strength Training for Seniors Book",
        description: "For that old man grip",
        image: "seniorstrengthbook.jpg",
        price: 15.99,
        quantity: 10,
        category: categories[4]._id,
        isRentable: false,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Everly Well test Kit",
        description: "A test kit for allergens and intolerances",
        image: "sharktankeverlywell.jpg",
        price: 5.99,
        quantity: 10,
        category: categories[3]._id,
        isRentable: false,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "UV - C Disinfection Robot",
        description: "Fast, efficient, and chemical free UV solution guaranteeing a whole - room disinfection.",
        image: "ultralightwheelchair.jpg",
        price: 1499.99,
        quantity: 8,
        category: categories[2]._id,
        isRentable: true,
        rentalPrice: 149.99,
        rentalPeriod: 7,
        rentalStock: 8
      },
      {

        name: "EVERLIT Advanced Emergency Trauma Kit",
        description: "Military Combat Tactical IFAK for First Aid Response Bleeding Control",
        image: "advemergencytrauma.jpg",
        price: 115.99,
        quantity: 5,
        category: categories[0]._id,
        isRentable: false,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Watch Pill",
        description: "The pill box size is 1.38 inch(diameter) * 0.3 inch(Height) Pill container locks and opens with a secure and simple button so it won't pop open and spill.",
        image: "watchpillbox.jpg",
        price: 5.99,
        quantity: 10,
        category: categories[5]._id,
        isRentable: false,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "HiccAway straw",
        description: "The only drug free, reusable natural cure for hiccups is available in Single Packs",
        image: "sharktankhicc.jpeg",
        price: 11.99,
        quantity: 20,
        category: categories[2]._id,
        isRentable: false,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Ava Elephant",
        description: "Ava helps administer the entire medicine dosage on the first try and it creates a pleasant experience for kids to take their medicines and gives them positive reinforcement.",
        image: "sharktankavaelephant.jpg",
        price: 9.99,
        quantity: 25,
        category: categories[2]._id,
        isRentable: false,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Lepulse Smart Weight Scale",
        description: "15 Essential Body Composition Analyzer with LED screen.",
        image: "smartweightscale.jpg",
        price: 49.99,
        quantity: 7,
        category: categories[2]._id,
        isRentable: false,
        rentalPrice: 1.99,
        rentalPeriod: 7,
        rentalStock: 10
      },
      {

        name: "Health O Meter Digital Medical Scale",
        description: "High 500 lb./ 220 kg capacity with professional grade accuracy",
        image: "healthometerscale.jpg",
        price: 349.99,
        quantity: 3,
        category: categories[2]._id,
        isRentable: true,
        rentalPrice: 54.99,
        rentalPeriod: 7,
        rentalStock: 2
      }]);


    await User.deleteMany();

    await User.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'jdoe@gmail.com',
      password: 'welcome123',
      orders: [
        {
          products: [products[0]._id, products[0]._id, products[1]._id]
        }
      ]
    });

    await User.create({
      firstName: 'Lance',
      lastName: 'Anozie',
      email: 'lanozie@gmail.com',
      password: 'welcome123'
    });

    await User.create({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@gmail.com',
      password: 'welcome123'
    });

    console.log('users seeded');

    await Charity.create(charitiesData);


  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
