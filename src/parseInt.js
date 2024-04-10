export function myParseInt(str) {
  var res = str.charCodeAt(0) - 48;
  var strLength = str.length;
  for (let i = 1; i < strLength; i++) {
    res *= 10;
    var charCode = str.charCodeAt(i);
    var value = charCode - 48;
    res += value;
  }
  return res;
}
