import "multer";

import type {
  ProductCategoryEnum,
  ProductStatusEnum,
} from "#src/enums/productEnum.js";

export interface ProductInterface {
  name: string;
  sku: string;
  category: ProductCategoryEnum;
  description: string;
  price: number;
  quantity: number;
  status: ProductStatusEnum;
  supplier: string;
  image: string;
}

export interface fileInterface {
  productImage: Express.Multer.File[];
}
