export const copyText = text => {
  var tempElem = document.createElement('textarea');
  tempElem.value = text;
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand('copy');
  document.body.removeChild(tempElem);
};
