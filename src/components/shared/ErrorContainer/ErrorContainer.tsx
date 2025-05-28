import { TriangleAlert } from "lucide-react";

interface ErrorContainerProps {
  message: string;
  className?: string;
}

const ErrorContainer = ({ message, className = "" }: ErrorContainerProps) => {
  return (
    <tr>
      <td colSpan={5} className="bg-[#b4b3b3] rounded-lg p-4">
        <div className="h-[500px] flex items-center justify-center space-x-4">
          <TriangleAlert className="text-red-500" />
          <h3 className={`text-black/70 ${className}`}>{message}</h3>
        </div>
      </td>
    </tr>
  );
};

export default ErrorContainer;

// import { TriangleAlert } from "lucide-react";
// import "@/app/globals.css";

// interface ErrorContainerProps {
//   message: string;
//   className? : string
// }

// const ErrorContainer = ({ message, className="" }: ErrorContainerProps) => {
//   return (
//     <div className="flex h-[300px] !w-full flex-col items-center justify-center bg-[#b4b3b3] rounded-lg ">
//         <TriangleAlert className="text-red-500" />
//         <h3 className={`mt-2 text-black/70 ${className}`}>{message}</h3>
//       </div>
//   );
// };

// export default ErrorContainer;
