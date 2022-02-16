export const publish = (event, data) => {
  document.dispatchEvent(new CustomEvent(event, { detail: data }));
}