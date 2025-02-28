import {
  GET_USER_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
} from "./ActionTypes";

const initialState = {
  user: null,
  loading: false,
  error: null,
  jwt: null,
};

const authReducer = (state = initialState) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_REQUEST:

    case GET_USER_SUCCESS:
      return { ...state, loading: false, error: null, jwt: action.payload };

    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null };

    case REGISTER_SUCCESS:
      return { ...state, loading: false, error: null, jwt: action.payload };

    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGIN_SUCCESS:

    case LOGIN_FAILURE:

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};
export default authReducer;
