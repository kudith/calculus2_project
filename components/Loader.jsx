import { AiOutlineLoading } from "react-icons/ai";

export function Loader({ text = "Loading...", textClassNames = "" }) {
  return (
    <div className="flex-center flex-col gap-4 items-center">
      <div className="relative w-12 h-12 animate-spin">
        <AiOutlineLoading
          size={30}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="w-full h-full border-t-4 border-purple-500 border-r-4 border-transparent rounded-full animate-spin" />
      </div>
      <p className={`text-center ${textClassNames}`}>{text}</p>
    </div>
  );
}
