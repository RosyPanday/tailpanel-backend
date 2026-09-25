import * as Sequelize from "sequelize";

import { Database } from "#src/database/connection.js";
import { ProductCategoryEnum, ProductStatusEnum } from "#src/enums/productEnum.js";
import type { ProductModelInterface } from "#src/interfaces/productInterface.js";

const sequelize = Database.sequelize;
const Product = sequelize.define<ProductModelInterface>(
  "products",
  {
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
      type: Sequelize.ENUM(...Object.values(ProductCategoryEnum)),
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2), // Stores numbers up to 99,999,999.99
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    status: {
      type: Sequelize.ENUM(...Object.values(ProductStatusEnum)),
      allowNull: false,
      defaultValue: ProductStatusEnum.inStock,
    },
    supplier: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false, 
    },
  },
  {
    timestamps: true,
    paranoid: true,
    underscored: true,
  },
);

export default Product;