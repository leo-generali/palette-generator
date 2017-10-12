export function copyText(string) {
  const textArea = document.createElement('textarea');
  let returnString = string;
  if(typeof(string) === 'object') {
    returnString = JSON.stringify(string);
  } 
  textArea.value = returnString;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}