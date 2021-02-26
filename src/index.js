module.exports = function check(str, bracketsConfig) {
  function removePair(str, bracketsConfig) {
    if (str.length < 2) {
      return str;
    } else {
      let match = false;
      bracketsConfig.forEach(v => {
        if (str.indexOf(v.join('')) >= 0) {
          str = str.replace(v.join(''), '');
          match = true;
        };
      });
      return (match == false) ? str : removePair(str, bracketsConfig)
    };
  };
  return !removePair(str, bracketsConfig);
}
