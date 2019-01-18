const isNotAvailable = (key, value, verb) => {
  if (value.length === 0) {
    value = `There ${verb} no ${key} at the moment`;
    return value;
  }
  return value;
};

module.exports = isNotAvailable;
