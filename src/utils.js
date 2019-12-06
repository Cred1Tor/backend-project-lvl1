const random = (min, max) => (max === undefined ? random(0, min)
  : Math.floor(Math.random() * (max + 1 - min) + min));

export default random;
