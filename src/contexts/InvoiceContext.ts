import { createContext } from "react";
import type { InvoicesContextType } from "../types";

export const InvoicesContext = createContext<InvoicesContextType>({
  invoices: [],
  setInvoices: () => {},
});
