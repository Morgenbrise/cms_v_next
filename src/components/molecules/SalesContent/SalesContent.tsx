import Button from "@/components/atoms/Button";
import { CardView } from "@/components/atoms/CardView";
import { PlusIcon } from "@/components/icon/PlusIcon";

const SalesContent = () => {
  return (
    <CardView>
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="mr-5 font-normal text-base text-[#78829D]">
            어제 판매액 :{" "}
          </span>
          <span className="font-normal text-base text-[#78829D]">000000</span>
        </div>

        <Button
          color="success"
          variant="contained"
          className="flex justify-between"
        >
          <PlusIcon />
          <span className="ml-1">Create</span>
        </Button>
      </div>
    </CardView>
  );
};

export default SalesContent;
