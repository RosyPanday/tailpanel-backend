import type { InvoiceInterface } from "#src/interfaces/invoiceInterface.js";
import { InvoiceRepository } from "#src/repositories/invoiceRepository.js";

export class InvoiceService {
  private InvoiceRepository: InvoiceRepository;

  constructor() {
    this.InvoiceRepository = new InvoiceRepository();
  }

  public async addInvoice({
    customerName,
    email,
    address,
    location,
    phoneNumber,
    description,
    quantity,
    rate,
    notes,
    issuedDate,
    dueDate,
  }: {
    customerName: string;
    email: string;
    address: string | null;
    location: string | null;
    phoneNumber: string | null;
    description: string;
    quantity: number;
    rate: number;
    notes: string;
    issuedDate: Date;
    dueDate: Date;
  }): Promise<void> {
    const amount = quantity * rate;
    const total = amount + 0.1 * amount;
    await this.InvoiceRepository.create({
      customerName,
      email,
      address,
      location,
      phoneNumber,
      description,
      quantity,
      rate,
      notes,
      issuedDate,
      dueDate,
      amount,
      total,
    });
  }

  public async getInvoices(): Promise<InvoiceInterface[]> {
    return await this.InvoiceRepository.findAll({ raw: true });
  }
}