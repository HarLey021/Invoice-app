import Empty from "../components/empty/Empty";
import { useContext } from "react";
import Invoice from "../components/invoice/Invoice";

import { InvoicesContext } from "../contexts/InvoiceContext";
import type { InvoiceInterface, InvoicesContextType } from "../types";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { invoices } = useContext<InvoicesContextType>(InvoicesContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full min-h-screen bg-light dark:bg-very-dark px-6 py-8 pt-26">
        <div className="w-full h-11 flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-[-0.75px] text-black dark:text-white">
              Invoices
            </h1>
            <p className="text-dark-grey dark:text-light-grey text-[13px] font-medium">
              7 invoices
            </p>
          </div>

          <div className="flex h-full">
            <button className="flex items-center mr-[18px] cursor-pointer">
              <span className="text-black dark:text-white text-[15px] font-bold tracking-[-0.25px] mr-3">
                Filter
              </span>
              <img
                className="w-2.5 h-[5px]"
                src="/icon-arrow-down.svg"
                alt="arrow-down"
              />
            </button>
            <button
              onClick={() => {
                navigate("/create");
              }}
              className="w-[90px] h-full bg-violet rounded-3xl pl-1.5 pr-[13px] flex justify-between items-center cursor-pointer"
            >
              <div className="w-8 h-8 rounded-4xl bg-white flex justify-center items-center">
                <img src="icon-plus.svg" alt="plus" />
              </div>
              <p className="text-white text-[15px] font-bold tracking-[-0.25px]">
                New
              </p>
            </button>
          </div>
        </div>
        {invoices.length === 0 && <Empty />}

        {invoices.map((invoice: InvoiceInterface) => (
          <Invoice key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </>
  );
};

export default Home;
