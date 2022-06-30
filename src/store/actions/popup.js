export function popupOpen(modalParams) {
  return {
    type: 'OPEN_EVENT',
    modalParams,
  };
}
export function popupClose(status) {
  return {
    type: 'CLOSE_EVENT',
    status,
  };
}
