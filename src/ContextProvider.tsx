import { useEffect, useState } from "react";
import { InvoicesContext } from "./contexts/InvoiceContext";
import type { InvoiceInterface } from "./types";
import data from "../src/data.json";

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [invoices, setInvoices] = useState<InvoiceInterface[]>([]);
  const [showEditInvoice, setShowEditInvoice] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("invoices");

    if (saved) {
      setInvoices(JSON.parse(saved));
    } else {
      localStorage.setItem("invoices", JSON.stringify(data));
      setInvoices(data as InvoiceInterface[]);
    }
  }, [setInvoices]);

  return (
    <InvoicesContext.Provider
      value={{ invoices, setInvoices, showEditInvoice, setShowEditInvoice }}
    >
      {children}
    </InvoicesContext.Provider>
  );
};

export default ContextProvider;
