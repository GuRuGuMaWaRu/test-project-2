import { useRef, useCallback } from "react";

const useIntersectionObserver = ({ activationFn }) => {
  const target = useRef(null);

  const setRef = useCallback(
    (node) => {
      const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          entry.isIntersecting && activationFn();
        }),
      {
        root: null,
        rootMargin: "0px",
        threshold: .5,
      }
    );

      if (target.current) {
        observer.unobserve(target.current);
      }

      if (node) {
        observer.observe(node);
      }

      target.current = node;
    },
    [],
  )

  return [setRef];
};

export default useIntersectionObserver;
