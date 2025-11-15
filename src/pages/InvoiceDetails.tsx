import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { InvoiceInterface, InvoicesContextType } from "../types";
import { InvoicesContext } from "../contexts/InvoiceContext";

const InvoiceDetails: React.FC = () => {
  const navigate = useNavigate();
  const klickedId = useParams().id;
  const { invoices } = useContext<InvoicesContextType>(InvoicesContext);
  const invoice: InvoiceInterface | undefined = invoices.find(
    (inv) => inv.id === klickedId
  );

  return (
    <>
      <div className="w-full min-h-screen bg-light dark:bg-very-dark px-6 py-8">
        <div className="flex items-center mb-8">
          <img
            className="w-[5px] h-[9px] mr-6"
            src="/icon-arrow-left.svg"
            alt="arrow left"
          />
          <button
            onClick={() => navigate("/")}
            className="text-black dark:text-white  text-[15px] font-bold tracking-[-0.25px]"
          >
            Go back
          </button>
        </div>

        <div className="w-full h-23 bg-white dark:bg-dark rounded-lg px-6 flex justify-between items-center mb-4">
          <h6 className="text-[13px] font-medium text-[#858BB2] dark:text-light-grey">
            status
          </h6>
          <div
            className={`w-26 h-10 ${
              invoice?.status === "paid"
                ? "bg-green/10"
                : invoice?.status === "pending"
                ? "bg-orange/10"
                : "bg-header-dark/10 dark:bg-light-grey/10"
            }  rounded-md  flex justify-center items-center `}
          >
            <div
              className={`w-2 h-2 mr-2 ${
                invoice?.status === "paid"
                  ? "bg-green"
                  : invoice?.status === "pending"
                  ? "bg-orange"
                  : "bg-header-dark dark:bg-light-grey"
              } rounded-lg`}
            ></div>
            <h4
              className={`text-[15px] ${
                invoice?.status === "paid"
                  ? "text-green"
                  : invoice?.status === "pending"
                  ? "text-orange"
                  : "text-header-dark dark:text-light-grey"
              } font-bold tracking-[-0.25px]`}
            >
              {invoice?.status}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetails;
