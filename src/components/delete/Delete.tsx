import { useParams } from "react-router-dom";
import type { DeleteProps } from "../../types";

const Delete: React.FC<DeleteProps> = ({ setDeleteActive }) => {
  const { id } = useParams();
  return (
    <>
      <div className="w-full h-full bg-black/50 absolute z-6 flex justify-center items-center dark:bg-black/60">
        <div className="w-[327px] h-55 bg-white rounded-lg p-8 pt-8.5 dark:bg-dark md:w-120 md:h-[250px] md:p-12 md:pt-[51px] ">
          <h2 className="text-2xl text-black font-bold tracking-[-0.5px] mb-2 dark:text-white md:mb-3">
            Confirm Deletion
          </h2>
          <p className="text-[13px] text-dark-grey font-medium mb-5.5 md:mb-3.5">
            Are you sure you want to delete invoice #{id}? This action cannot be
            undone.
          </p>
          <div className="w-full flex gap-2 justify-end">
            <button
              onClick={() => setDeleteActive(false)}
              className="w-[91px] h-12 rounded-3xl bg-[#F9FAFE] text-[15px] text-[#7E88C3] tracking-[-0.25px] font-bold cursor-pointer dark:bg-[#252945] dark:text-light-grey"
            >
              Cancel
            </button>
            <button className="w-[91px] h-12 rounded-3xl bg-red text-[15px] text-white tracking-[-0.25px] font-bold cursor-pointer">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delete;
