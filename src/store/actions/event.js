export function eventAdd(event) {
  return {
    type: 'ADD_EVENT',
    event,
  };
}
export function eventChange(event) {
  return {
    type: 'CHANGE_EVENT',
    event,
  };
}
export function eventRemove(event) {
  return {
    type: 'REMOVE_EVENT',
    event,
  };
}
