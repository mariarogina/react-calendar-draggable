const eventList = [
  {
    title: 'Test event',
    start: '2019-11-19T00:00:00.000Z',
    end: '2019-11-20T00:00:00.000Z',
    id: 1,
    backgroundColor: 'blue',
  },
  {
    title: 'Another test',
    start: '2019-11-20T00:00:00.000Z',
    end: '2019-11-21T00:00:00.000Z',
    id: 2,
    backgroundColor: 'blue',
  },
  {
    title: 'And Another',
    start: '2019-11-22T00:00:00.000Z',
    end: '2019-11-23T00:00:00.000Z',
    id: 3,
    backgroundColor: 'blue',
  },
];

function eventsReducer(state = eventList, action) {

  switch (action.type) {

    case 'ADD_EVENT': {
      return [
        ...state,
        action.event
      ];
    }

    case 'REMOVE_EVENT': {
      let index = -1;
      const found = state.find(item => {
        index += 1;
        return Number(item.id) === Number(action.event);
      });

      const newState = [...state];

      if (found) newState.splice(index, 1);

      return newState;
    }

    case 'CHANGE_EVENT': {
      let index = -1;
      state.find(item => {
        index += 1;
        return Number(item.id) === Number(action.event.id);
      });

      const newState = [...state];

      newState[index] = {
        title: action.event.title,
        start: action.event.start,
        end: action.event.end,
        id: action.event.id,
        backgroundColor: action.event.backgroundColor
      };

      return newState;
    }

    default: {

      return state;
    }

  }
}

export default eventsReducer;
