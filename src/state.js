import { atom } from "recoil";

export const clickCountByDateAtom = atom({
  key: "clickCountByDate",
  default: JSON.parse(localStorage.getItem("clickCountByDate")) || {},
});

export const recentPerformancesState = atom({
  key: "recentPerformancesState",
  default: JSON.parse(localStorage.getItem("recentPerformances")) || [],
});

export const updateRecentPerformances = (
  performance,
  setRecentPerformances
) => {
  setRecentPerformances((prevPerformances) => {
    let isDuplicate = false;

    for (let i = 0; i < prevPerformances.length; i++) {
      const prevPerformanceId = prevPerformances[i].mt20id[0];
      const currentPerformanceId = performance.mt20id[0];

      if (prevPerformanceId === currentPerformanceId) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      const updatedPerformances = [
        performance,
        ...prevPerformances.slice(0, 4),
      ];
      localStorage.setItem(
        "recentPerformances",
        JSON.stringify(updatedPerformances)
      );
      return updatedPerformances;
    }

    return prevPerformances;
  });
};
