const initialState = {
  city: '',
  fetching: true,
  weather: [],
  warningVisibility: false,
};

const weatherInfo = (state = initialState, action) => {  
  switch (action.type) {
    case 'REQUEST_POST':
      return {
        ...state,
        fetching: true
      };
    case 'RECEIVE_POST':
      return {
        ...state,
        city: action.city,
        fetching: false,
        weather: action.weather
      };
    case 'RECEIVE_POST_FAILED':
      return {
        ...state,
        fetching: false,
        warningVisibility: true
      }
    default:
      return state;
  }
};

export default weatherInfo;