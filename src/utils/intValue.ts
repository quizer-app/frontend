export default function intValue(str: string | null) {
  if (str === null) {
    return 0;
  }
  return parseInt(str);
}
