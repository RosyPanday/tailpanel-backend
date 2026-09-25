"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      sku: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      category: {
        type: Sequelize.ENUM(
          "ELECTRONICS",
          "CLOTHING",
          "ACCESSORIES",
          "HOME_AND_GARDEN",
          "SPORTS"
        ),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      status: {
        type: Sequelize.ENUM("IN_STOCK", "OUT_OF_STOCK", "LOW_STOCK"),
        allowNull: false,
        defaultValue: "IN_STOCK",
      },
      supplier: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");

    // Clean up PostgreSQL ENUM types if using Postgres
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_products_category";'
    );
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_products_status";'
    );
  },
};