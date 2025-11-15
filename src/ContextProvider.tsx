import { useState } from "react";
import { InvoicesContext } from "./contexts/InvoiceContext";
import type { InvoiceInterface } from "./types";

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [invoices, setInvoices] = useState<InvoiceInterface[]>([]);

  return (
    <InvoicesContext.Provider value={{ invoices, setInvoices }}>
      {children}
    </InvoicesContext.Provider>
  );
};

export default ContextProvider;
