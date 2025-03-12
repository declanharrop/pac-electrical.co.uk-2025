export default function formatDate(str) {
  const splitName = str.split('');
  const year = splitName[0] + splitName[1] + splitName[2] + splitName[3];
  const month = splitName[5] + splitName[6];
  const day = splitName[8] + splitName[9];
  const newString = `${day}/${month}/${year}`;
  return newString;
}
