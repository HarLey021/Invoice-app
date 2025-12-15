import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { InvoiceInterface, InvoicesContextType } from "../types";
import { InvoicesContext } from "../contexts/InvoiceContext";

const InvoiceDetails: React.FC = () => {
  const navigate = useNavigate();
  const klickedId: string | undefined = useParams().id;
  const { invoices, setShowEditInvoice } =
    useContext<InvoicesContextType>(InvoicesContext);
  const invoice: InvoiceInterface | undefined = invoices.find(
    (inv) => inv.id === klickedId
  );

  const handleEdit = () => {
    setShowEditInvoice(true);
    navigate(`/edit/${klickedId}`);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-light dark:bg-very-dark px-6 py-26 ">
        <div className="flex items-center mb-8">
          <img
            className="w-[5px] h-[9px] mr-6"
            src="/icon-arrow-left.svg"
            alt="arrow left"
          />
          <button
            onClick={() => navigate("/")}
            className="text-black dark:text-white  text-[15px] font-bold tracking-[-0.25px] cursor-pointer"
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

        <div className="w-full bg-white dark:bg-dark rounded-lg p-6 mb-14">
          <div className="mb-[30px]">
            <div className="mb-[30px]">
              <h2 className="text-[15px] font-bold text-black dark:text-white tracking-[-0.25px] mb-1">
                <span className="text-[#7E88C3]">#</span>
                {invoice?.id}
              </h2>
              <p className="text-[13px] font-medium text-[#7E88C3] dark:text-light-grey">
                {invoice?.description}
              </p>
            </div>

            <div className="text-[13px] font-medium text-[#7E88C3] dark:text-light-grey">
              <p>{invoice?.senderAddress.street}</p>
              <p>{invoice?.senderAddress.city}</p>
              <p>{invoice?.senderAddress.postCode}</p>
              <p>{invoice?.senderAddress.country}</p>
            </div>
          </div>

          <div className="flex gap-15">
            <div>
              <p className="text-[13px] font-medium text-[#7E88C3] dark:text-light-grey mb-[13px]">
                Invoice Date
              </p>
              <h2 className="text-[15px] font-bold text-black dark:text-white tracking-[-0.25px] mb-[30px]">
                {new Date(invoice?.createdAt || "").toLocaleDateString(
                  "en-GB",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }
                )}
              </h2>

              <p className="text-[13px] font-medium text-[#7E88C3] dark:text-light-grey mb-[13px]">
                Payment Due
              </p>
              <h2 className="text-[15px] font-bold text-black dark:text-white tracking-[-0.25px]">
                {new Date(invoice?.paymentDue || "").toLocaleDateString(
                  "en-GB",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }
                )}
              </h2>
            </div>

            <div className="text-[13px] font-medium text-[#7E88C3] dark:text-light-grey">
              <p className="mb-[13px]">Bill To</p>

              <h2 className="text-[15px] font-bold text-black dark:text-white tracking-[-0.25px] mb-[7px]">
                {invoice?.clientName}
              </h2>

              <p>{invoice?.clientAddress.street}</p>
              <p>{invoice?.clientAddress.city}</p>
              <p>{invoice?.clientAddress.postCode}</p>
              <p>{invoice?.clientAddress.country}</p>
            </div>
          </div>

          <div className="mb-[38px]">
            <p className="text-[13px] font-medium text-[#7E88C3] dark:text-light-grey mb-[13px]">
              Sent To
            </p>
            <h2 className="text-[15px] font-bold text-black dark:text-white tracking-[-0.25px]">
              {invoice?.clientEmail}
            </h2>
          </div>

          <div className="w-full">
            <div className="w-full  bg-[#F9FAFE] dark:bg-[#252945] p-6 rounded-t-lg flex flex-col gap-y-6">
              {invoice?.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center"
                >
                  <div>
                    <h2 className="text-[15px] font-bold text-black dark:text-white tracking-[-0.25px]">
                      {item.name}
                    </h2>
                    <p className="text-[13px] font-medium text-[#7E88C3] dark:text-light-grey">
                      {item.quantity} x £ {item.price.toFixed(2)}
                    </p>
                  </div>
                  <h2 className="text-[15px] font-bold text-black dark:text-white tracking-[-0.25px]">
                    £ {item.total.toFixed(2)}
                  </h2>
                </div>
              ))}
            </div>
            <div className="w-full h-20 bg-[#373B53] rounded-b-lg dark:bg-black p-6 flex justify-between items-center">
              <p className="text-[13px] font-medium text-white">Grand Total</p>
              <h1 className="text-2xl font-bold tracking-[-0.5px] text-white">
                £ {invoice?.total}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-23 bg-white dark:bg-dark px-6 py-[21px] flex justify-between items-center">
        <button
          onClick={handleEdit}
          className="w-18 h-12 bg-[#F9FAFE] dark:bg-[#252945] rounded-3xl flex justify-center items-center text-[15px] font-bold tracking-[-0.25px] text-[#7E88C3] dark:text-light-grey cursor-pointer"
        >
          Edit
        </button>
        <button className="w-[90px] h-12 bg-red rounded-3xl flex justify-center items-center text-[15px] font-bold tracking-[-0.25px] text-white cursor-pointer">
          Delete
        </button>
        <button className="w-[149px] h-12 bg-violet rounded-3xl flex justify-center items-center text-[15px] font-bold tracking-[-0.25px] text-white cursor-pointer">
          Mark as Paid
        </button>
      </div>
    </>
  );
};

export default InvoiceDetails;
