import {ActionReducerMap} from '@ngrx/store';
import {IUsersState, IUserState, userReducer, usersReducer} from './store/reducers';

export interface IAppState {
  users: IUsersState;
  user: IUserState;
}

export const appReducers: ActionReducerMap<IAppState> = {
  users: usersReducer,
  user: userReducer
};
