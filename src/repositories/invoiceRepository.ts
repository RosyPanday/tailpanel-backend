import type { InvoiceInterface } from "#src/interfaces/invoiceInterface.js";
import Model from "#src/models/index.js";
import { BaseRepository } from "./baseRepository.js";

export class InvoiceRepository extends BaseRepository<
 InvoiceInterface,
 InvoiceInterface
> {
  constructor() {
    super(Model.Invoice);
  }
}
