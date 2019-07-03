import {User} from '../../models/user.model.';
import {ACTIONS_USERS, UsersActions} from '../actions';

export interface IUsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: IUsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,

};

export function usersReducer(state = initState, action: UsersActions): IUsersState {
  switch (action.type) {
    case ACTIONS_USERS.CARGAR_USERS:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case ACTIONS_USERS.CARGAR_USERS_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        error: null,
        users: [...action.usuarios]
      };
    case ACTIONS_USERS.CARGAR_USERS_FAIL:
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
