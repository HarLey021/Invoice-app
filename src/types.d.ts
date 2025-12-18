import type { SetStateAction } from "react";

interface InvoiceInterface {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: "paid" | "pending" | "draft";

  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };

  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };

  items: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];

  total: number;
}

type InvoiceProps = {
  invoice: InvoiceInterface;
};

type InvoicesContextType = {
  invoices: InvoiceInterface[];
  setInvoices: React.Dispatch<SetStateAction<InvoiceInterface[]>>;
  showEditInvoice: boolean;
  setShowEditInvoice: React.Dispatch<SetStateAction<boolean>>;
};

type ItemProps = {
  id: string;
  deleteItem: (id: string) => void;
};

type DeleteProps = {
  setDeleteActive: React.Dispatch<SetStateAction<boolean>>;
};
