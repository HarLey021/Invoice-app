import { useNavigate } from "react-router-dom";
import type { InvoiceProps } from "../../types";

const Invoice: React.FC<InvoiceProps> = ({ invoice }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate(`/${invoice.id}`);
        }}
        className="w-full h-[146px] bg-white dark:bg-dark rounded-lg shadow-[0_10px_10px_-10px_rgba(72,84,159,0.1)] p-6 mb-4"
      >
        <div className="flex justify-between">
          <div>
            <h3 className="text-[15px] text-black dark:text-white font-bold tracking-[-0.25px] mb-6">
              <span className="text-[#7E88C3]">#</span>
              {invoice.id}
            </h3>

            <h4 className="text-[13px] text-[#7E88C3] dark:text-light-grey font-bold mb-[9px]">
              <span className="text-dark-grey dark:text-light-grey">Due</span>{" "}
              {new Date(invoice.paymentDue).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </h4>
          </div>
          <h4 className="text-[13px] text-[#858BB2] dark:text-white font-medium mt-0.5">
            {invoice.clientName}
          </h4>
        </div>

        <div className="flex justify-between">
          <h3 className="text-[15px] text-black dark:text-white font-bold tracking-[-0.25px]">
            £ {invoice.total.toFixed(2)}
          </h3>
          <div
            className={`w-26 h-10 ${
              invoice.status === "paid"
                ? "bg-green/10"
                : invoice.status === "pending"
                ? "bg-orange/10"
                : "bg-header-dark/10 dark:bg-light-grey/10"
            }  rounded-md  flex justify-center items-center mt-[-25px]`}
          >
            <div
              className={`w-2 h-2 mr-2 ${
                invoice.status === "paid"
                  ? "bg-green"
                  : invoice.status === "pending"
                  ? "bg-orange"
                  : "bg-header-dark dark:bg-light-grey"
              } rounded-lg`}
            ></div>
            <h4
              className={`text-[15px] ${
                invoice.status === "paid"
                  ? "text-green"
                  : invoice.status === "pending"
                  ? "text-orange"
                  : "text-header-dark dark:text-light-grey"
              } font-bold tracking-[-0.25px]`}
            >
              {invoice.status}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
