const { useState, useEffect } = require("react");

const useInView = (refComponent) => {
  const [data, setData] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setData(true);
        }
        //  else {
        //   setData(false);
        // }
      });
    });
    // console.log(data);
    observer.observe(refComponent.current);
    return () => {
      observer.disconnect();
    };
  }, [refComponent]);

  return [data];
};

export default useInView;
