import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../components/item/Item";
import { v4 as uuidv4 } from "uuid";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [showNet, setShowNet] = useState<boolean>(false);
  const [net, setNet] = useState<string>("Net 30 Days");
  const [items, setItems] = useState<any[]>([]);

  const addItem = () => {
    setItems((prev) => [...prev, { id: uuidv4() }]);
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="w-full min-h-screen ">
        <div className="w-full min-h-screen bg-white dark:bg-very-dark px-6 pb-6 pt-26">
          <div className="flex items-center mb-[26px]">
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

          <div>
            {/* <p>
            Edit <span>#</span>
            {}
          </p> */}
            <h1 className="text-2xl font-bold text-black dark:text-white tracking-[-0.5px] mb-[22px]">
              New Invoice
            </h1>
          </div>

          <div className=" w-full mb-[41px]">
            <h4 className="text-[15px] font-bold tracking-[-0.25px] text-violet mb-6">
              Bill From
            </h4>

            <div className="w-full mb-[25px]">
              <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                Street Address
              </h6>

              <input
                className="w-full h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-5"
                type="text"
              />
            </div>

            <div className="w-full ">
              <div className="w-full flex gap-6">
                <div className="flex-1 mb-[25px]">
                  <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                    City
                  </h6>

                  <input
                    className="w-full  h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-5"
                    type="text"
                  />
                </div>

                <div className="flex-1 mb-[25px]">
                  <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                    Post Code
                  </h6>

                  <input
                    className="w-full  h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-5"
                    type="text"
                  />
                </div>
              </div>

              <div className="w-full">
                <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                  Country
                </h6>

                <input
                  className="w-full  h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-5"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="w-full mb-[41px]">
            <h4 className="text-[15px] font-bold tracking-[-0.25px] text-violet mb-6">
              Bill To
            </h4>

            <div>
              <div className="w-full mb-[25px]">
                <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                  Client’s Name
                </h6>

                <input
                  className="w-full  h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-5"
                  type="text"
                />
              </div>

              <div className="w-full mb-[25px]">
                <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                  Client’s Email
                </h6>

                <input
                  className="w-full  h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-5"
                  type="email"
                />
              </div>

              <div className="w-full mb-[25px]">
                <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                  Street Address
                </h6>

                <input
                  className="w-full  h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-5"
                  type="text"
                />
              </div>

              <div className="w-full gap-6 ">
                <div className="w-full flex gap-6 mb-[25px]">
                  <div className="flex-1">
                    <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                      City
                    </h6>

                    <input
                      className="w-full  h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-5"
                      type="text"
                    />
                  </div>

                  <div className="flex-1">
                    <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                      Post Code
                    </h6>

                    <input
                      className="w-full  h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-5"
                      type="text"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                    Country
                  </h6>

                  <input
                    className="w-full  h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-5"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-[69px]">
            <div className="w-full mb-[25px]">
              <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                Invoice Date
              </h6>

              <div className="w-full relative">
                <input
                  className="w-full  h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-5 pr-4"
                  type="date"
                />
                <img
                  className="absolute top-4 right-[18px] cursor-pointer"
                  src="/icon-calendar.svg"
                  alt="calendar icon"
                />
              </div>
            </div>

            <div className="w-full relative mb-[25px]">
              <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                Payment Terms
              </h6>

              <button
                onClick={() => {
                  setShowNet(!showNet);
                }}
                className="flex items-center w-full  h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-5 pr-4 cursor-pointer mb-2"
              >
                <p>{net}</p>
                <img
                  className="ml-auto"
                  src={showNet ? "/icon-arrow-up.svg" : "/icon-arrow-down.svg"}
                  alt="arrow icon"
                />
              </button>

              {showNet && (
                <div className="absolute top-21 right-0 w-60 shadow-[0_10px_20px_0_rgba(72,84,159,0.25)] bg-white dark:bg-dark rounded-lg divide-y divide-light-grey dark:divide-[#252945]">
                  <div className="w-full h-12 flex items-center pl-6 cursor-pointer">
                    <button
                      onClick={() => {
                        setNet("Net 1 Day");
                        setShowNet(false);
                      }}
                      className="text-[15px] text-black dark:text-white font-bold tracking-[-0.25px] hover:text-violet cursor-pointer"
                    >
                      Net 1 Day
                    </button>
                  </div>

                  <div className="w-full h-12 flex items-center pl-6 cursor-pointer">
                    <button
                      onClick={() => {
                        setNet("Net 7 Day");
                        setShowNet(false);
                      }}
                      className="text-[15px] text-black dark:text-white font-bold tracking-[-0.25px] hover:text-violet cursor-pointer"
                    >
                      Net 7 Day
                    </button>
                  </div>

                  <div className="w-full h-12 flex items-center pl-6 cursor-pointer">
                    <button
                      onClick={() => {
                        setNet("Net 14 Day");
                        setShowNet(false);
                      }}
                      className="text-[15px] text-black dark:text-white font-bold tracking-[-0.25px] hover:text-violet cursor-pointer"
                    >
                      Net 14 Day
                    </button>
                  </div>

                  <div className="w-full h-12 flex items-center pl-6 cursor-pointer">
                    <button
                      onClick={() => {
                        setNet("Net 30 Day");
                        setShowNet(false);
                      }}
                      className="text-[15px] text-black dark:text-white font-bold tracking-[-0.25px] hover:text-violet cursor-pointer"
                    >
                      Net 30 Day
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="w-full ">
              <h6 className="text-[13px] font-medium text-[#7E88C3] dark:text-dark-grey mb-[9px]">
                Project Description
              </h6>

              <input
                className="w-full  h-12 bg-white dark:bg-dark border border-light-grey dark:border-[#252945] rounded-sm text-[15px] font-bold tracking-[-0.25px] text-black dark:text-white pl-5"
                type="text"
              />
            </div>
          </div>

          <div>
            <h1 className="text-[18px] text-[#777F98] font-bold tracking-[-0.4px] mb-[22px]">
              Item List
            </h1>

            {items.map((item) => (
              <Item key={item.id} id={item.id} deleteItem={deleteItem} />
            ))}
            <button
              onClick={addItem}
              className="w-full h-12 bg-[#F9FAFE] dark:bg-[#252945] rounded-3xl text-[15px] font-bold text-[#7E88C3] dark:text-dark-grey tracking-[-0.25px]"
            >
              + Add New Item
            </button>
          </div>
        </div>

        <div className="w-full h-16 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.1)_100%)] dark:bg-very-dark"></div>

        <div className="w-full h-23 bg-white dark:bg-dark"></div>
      </div>
    </>
  );
};

export default Create;
