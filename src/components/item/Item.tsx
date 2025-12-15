import type { ItemProps } from "../../types";

const Item: React.FC<ItemProps> = ({ id, deleteItem }) => {
  return (
    <>
      <div className="mb-[50px]">
        <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[15px]">
          Item Name
        </h6>
        <input
          className="w-full  h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-5 pr-5 mb-[25px]"
          type="text"
        />

        <div className="flex justify-between pr-2">
          <div className="flex gap-4">
            <div>
              <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                Qty.
              </h6>
              <input
                className="w-16 h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-4 pr-4"
                type="text"
              />
            </div>

            <div>
              <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                Price
              </h6>
              <input
                className="w-25 h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-4 pr-4"
                type="text"
              />
            </div>

            <div>
              <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                Total
              </h6>
              <div className="h-12 flex items-center">
                <h5 className="text-[15px] font-bold  text-dark-grey tracking-[-0.25px]">
                  200.00
                </h5>
              </div>
            </div>
          </div>

          <button
            onClick={() => deleteItem(id)}
            className="pt-6 cursor-pointer"
          >
            <img src="/icon-delete.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
