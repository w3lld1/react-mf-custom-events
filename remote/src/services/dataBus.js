export const subscribe = (event, handler) => {
  console.log('subscribe')
  document.addEventListener(event, handler);
}

export const unsubscribe = (event, handler) => {
  document.removeEventListener(event, handler);
}