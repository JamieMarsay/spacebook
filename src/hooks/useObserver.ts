import { createRef, useEffect, useState } from "react";

const useObserver = () => {
  const node: any = createRef();
  const [inView, setInView] = useState(false);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!inView) {
          if (entry.isIntersecting) {
            setInView(true);
          }
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  useEffect(() => {
    if (node.current) {
      observer.observe(node.current);
    }
  }, []);

  return [node, inView];
};

export default useObserver;
