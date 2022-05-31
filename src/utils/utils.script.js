export const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => (images[item.replace("./", "")] = r(item)));
  return images;
};

export const calculatePromoPrice = (price, promoPercentage) =>
  (price - (price * promoPercentage) / 100).toFixed(0);

export const scrollToTop = () => {
  try {
    if (document.querySelector("body")) {
      document.querySelector("body").scrollIntoView(true);
    }
  } catch (error) {
    console.log(error);
  }
};
