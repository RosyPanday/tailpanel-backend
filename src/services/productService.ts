import type {
  ProductCategoryEnum,
  ProductStatusEnum,
} from "#src/enums/productEnum.js";
import { ProductRepository } from "#src/repositories/productRepository.js";

export class ProductService {
  private ProductRepository: ProductRepository;

  constructor() {
    this.ProductRepository = new ProductRepository();
  }

  formatFileUrl = (filePath: string): string => {
    const normalizedPath = filePath.replace(/\\/g, "/");

    return normalizedPath.startsWith("/")
      ? normalizedPath
      : `/${normalizedPath}`;
  };

  public async addProduct({
    name,
    sku,
    category,
    description,
    price,
    quantity,
    status,
    image,
    supplier,
  }: {
    name: string;
    sku: string;
    category: ProductCategoryEnum;
    description: string;
    price: number;
    quantity: number;
    status: ProductStatusEnum;
    image: string;
    supplier: string;
  }) {
    const formattedImagePath = this.formatFileUrl(image);
    await this.ProductRepository.create({
      name,
      sku,
      category,
      description,
      price,
      quantity,
      status,
      image,
      supplier,
    });
  }
}