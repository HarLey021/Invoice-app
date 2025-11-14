const Invoice: React.FC = () => {
  return (
    <>
      <div className="w-full h-[146px] bg-white dark:bg-dark rounded-lg p-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-[15px] text-black dark:text-white font-bold tracking-[-0.25px] mb-6">
              <span className="text-[#7E88C3]">#</span>RT3080
            </h3>

            <h4 className="text-[13px] text-[#7E88C3] dark:text-light-grey font-bold mb-[9px]">
              <span className="text-dark-grey dark:text-light-grey">Due</span>{" "}
              19 Aug 2021
            </h4>
          </div>
          <h4 className="text-[13px] text-[#858BB2] dark:text-white font-medium mt-0.5">
            Jensen Huang
          </h4>
        </div>

        <div className="flex justify-between">
          <h3 className="text-[15px] text-black dark:text-white font-bold tracking-[-0.25px]">
            £ 1,800.90
          </h3>
          <div className="w-26 h-10 bg-green/10 rounded-md px-[30px] flex justify-between items-center mt-[-25px]">
            <div className="w-2 h-2 bg-green rounded-lg"></div>
            <h4 className="text-[15px] text-green font-bold tracking-[-0.25px] ">
              Paid
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
