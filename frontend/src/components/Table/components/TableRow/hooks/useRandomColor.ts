import { useMemo } from "react";

export const useRandomColor = (id: number) => {
  return useMemo(() => {
    const colors = ["#E14165", "#C2C2FF", "#8686FF"];
    return colors[id % colors.length];
  }, [id]);
};
