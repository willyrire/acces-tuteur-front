export default function getParams() {
  return Object.fromEntries(new URLSearchParams(window.location.search));
}