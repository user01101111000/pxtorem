export default function pxtorem(px, base) {
  return (px / base).toString().length > 3 ? (px / base).toFixed(2) : px / base;
}
