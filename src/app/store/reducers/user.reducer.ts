import {User} from '../../models/user.model.';
import {ACTIONS_USER, UserActions} from '../actions';

export interface IUserState {
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: IUserState = {
  user: null,
  loaded: false,
  loading: false,
  error: null,

};

export function userReducer(state = initState, action: UserActions): IUserState {
  switch (action.type) {
    case ACTIONS_USER.CARGAR_USER:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case ACTIONS_USER.CARGAR_USER_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        error: null,
        user: {...action.user}
      };
    case ACTIONS_USER.CARGAR_USER_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url,
        }
      };
    default:
      return state;
  }

}
