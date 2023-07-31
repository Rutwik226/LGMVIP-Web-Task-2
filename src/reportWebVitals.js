const reportWebVitals = (onperfEntry) => {
    if (onperfEntry && onperfEntry instanceof Function) {
      import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onperfEntry);
        getFID(onperfEntry);
        getFCP(onperfEntry);
        getLCP(onperfEntry);
        getTTFB(onperfEntry);
      });
    }
  };
  export default reportWebVitals;
  