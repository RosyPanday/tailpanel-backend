"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "Wireless Noise-Canceling Headphones",
        sku: "ELEC-HEAD-001",
        category: "ELECTRONICS",
        description:
          "Over-ear bluetooth headphones with active noise cancellation.",
        price: 199.99,
        quantity: 50,
        status: "IN_STOCK",
        supplier: "TechCorp Ltd",
        image: "uploads/productImages/headphones.jpg",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: "Cotton Classic T-Shirt",
        sku: "CLOT-TSHIRT-002",
        category: "CLOTHING",
        description: "100% organic cotton t-shirt in black.",
        price: 24.5,
        quantity: 5,
        status: "LOW_STOCK",
        supplier: "Apparel Factory",
        image: "uploads/productImages/tshirt.jpg",
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
