import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

interface TableSkeletonWrapperProps {
  rows?: number; // Number of rows (default 6)
  columns?: number; // Number of columns per row
  width?: string;
  height?: string;
  className?: string;
}

const TableSkeletonWrapper: React.FC<TableSkeletonWrapperProps> = ({
  rows = 6,
  columns = 6,
  width = "100%",
  height = "40px",
  className = "",
}) => {
  return (
    <>
      {[...Array(rows)].map((_, rowIndex) => (
        <tr key={rowIndex}>
          {[...Array(columns)].map((_, colIndex) => (
            <td key={colIndex}>
              <Skeleton
                className={`rounded-lg ${className}`}
                style={{ width, height }}
              />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableSkeletonWrapper;


















// import { Skeleton } from "@/components/ui/skeleton";
// import React from "react";

// interface TableSkeletonWrapperProps {
//     width?: string;
//     height?: string;
//     className?: string;
//     count?: number;
// }

// const TableSkeletonWrapper: React.FC<TableSkeletonWrapperProps> = ({
//     width = "100%",
//     height = "120px",
//     className = "",
//     count = 6
// }) => {
//     return (
//          <div className="w-full flex flex-col gap-4">
//              {[...Array(count)].map((_, index) => (
//                  <Skeleton
//                      key={index}
//                      className={`rounded-lg ${className}`}
//                      style={{ width, height }}
//                  />
//              ))}
//          </div>
//     );
// };

// export default TableSkeletonWrapper;
