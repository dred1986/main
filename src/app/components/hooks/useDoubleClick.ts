import { useEffect, useState, useRef, useCallback } from "react";

export const useDoubleclick = (callback: () => void, delay: number = 300) => {
  const [timesClicked, setTimesClicked] = useState(0);
  let timerId = useRef(null);

  const doubleClick = useCallback(() => {
    setTimesClicked(timesClicked + 1);
  }, [timesClicked]);

  useEffect(() => {
    if (!timerId.current && timesClicked > 0) {
      timerId.current = setTimeout(() => {
        clearTimeout(timerId.current);
        timerId.current = null;
        setTimesClicked(0);
      }, delay);
    }

    if (timesClicked > 1) {
      setTimesClicked(0);
      callback();
    }
  }, [callback, timesClicked, timerId, delay]);

  return doubleClick;
};
