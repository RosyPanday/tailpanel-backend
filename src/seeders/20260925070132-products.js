"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("invoices", [
      {
        customer_name: "Acme Corporation",
        email: "billing@acme.com",
        address: "123 Business Rd, Suite 100",
        location: "New York, NY",
        phone_number: "+1-555-0199",
        description: "Web Development Services - Milestone 1",
        quantity: 1,
        rate: 1500.00,
        amount: 1500.00,
        notes: "Payment due within 15 days of invoice date.",
        issued_date: new Date("2026-09-01"),
        due_date: new Date("2026-09-16"),
        total: 1500.00,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        customer_name: "Starlight Media",
        email: "accounts@starlight.io",
        address: "456 Creative Ave",
        location: "San Francisco, CA",
        phone_number: "+1-555-0142",
        description: "Monthly Cloud Infrastructure Maintenance",
        quantity: 5,
        rate: 200.00,
        amount: 1000.00,
        notes: "Thank you for your business!",
        issued_date: new Date("2026-09-10"),
        due_date: new Date("2026-09-25"),
        total: 1000.00,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("invoices", null, {});
  },
};