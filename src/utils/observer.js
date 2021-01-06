import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export function observer() {
  let history = useHistory();
  function useOnScreen(options) {
    const [ref, setRef] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setVisible(entry.isIntersecting);
        {
          visible && history.push("/#about");
        }
        // observer.unobserve(entry);
      }, options);

      if (ref) {
        observer.observe(ref);
      }

      return () => {
        if (ref) {
          observer.unobserve(ref);
        }
      };
    }, [ref, options]);

    return [setRef, visible];
  }
  return useOnScreen();
}

export default observer;
