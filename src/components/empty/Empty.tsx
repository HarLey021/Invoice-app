const Empty: React.FC = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center pt-15">
        <img
          src="illustration-empty.svg"
          alt="empty illustration"
          className="w-[194px] h-40 mb-[42px]"
        />
        <h1 className="text-black dark:text-white text-2xl font-bold tracking-[-0.75px] mb-6">
          There is nothing here
        </h1>
        <p className="w-44 text-center text-[13px] text-dark-grey dark:text-light-grey font-medium">
          Create an invoice by clicking the{" "}
          <span className="font-bold">New</span> button and get started
        </p>
      </div>
    </>
  );
};

export default Empty;
