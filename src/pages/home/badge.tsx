import React from "react";

interface HomeBadgeProps {
  leftCount: number;
}

export const HomeBadge: React.FC<HomeBadgeProps> = ({ leftCount }) => {
  return (
    <>
      {leftCount ? (
        <span className="transform -translate-y-0.5 text-base text-purple-700 bg-purple-200 rounded-full w-8 h-8 inline-flex items-center justify-center align-middle">
          {leftCount}
        </span>
      ) : (
        <span className="transform -translate-y-0.5 text-sm inline-flex items-center justify-center align-middle text-green-600 bg-green-200 p-1 rounded-xl">
          All done
        </span>
      )}
    </>
  );
};
