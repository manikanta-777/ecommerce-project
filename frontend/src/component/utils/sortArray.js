import Constants from "../HOC/Constants";
const sortArray = (type, products) => {
  const constData = Constants();
  const sortProperty = constData.types[type];
  const ascending = constData.order[type];
  return products?.slice().sort(function (a, b) {
    return ascending
      ? a[sortProperty] - b[sortProperty]
      : b[sortProperty] - a[sortProperty];
  });
};

export default sortArray;
