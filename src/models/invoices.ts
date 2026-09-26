import * as Sequelize from "sequelize";

import { Database } from "#src/database/connection.js";
import type { InvoiceModelInterface } from "#src/interfaces/invoiceInterface.js";

const sequelize = Database.sequelize;
const Invoice = sequelize.define<InvoiceModelInterface>(
  "invoices",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    customerName: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: Sequelize.STRING(20),
      allowNull: true,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    rate: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    amount: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    notes: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    issuedDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    dueDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    total: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    underscored: true,
  },
);

export default Invoice;