const kelvToC = (value) => value - 273.15;

const kelvToF = (value) => ((value - 273.15) * 9) / 5 + 32;

const unitConverter = {
  c: kelvToC,
  f: kelvToF,
};

export default unitConverter;
