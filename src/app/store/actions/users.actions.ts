import {Action} from '@ngrx/store';
import {User} from '../../models/user.model.';

export enum ACTIONS_USERS {
  CARGAR_USERS = '[Usuarios] Cargar usuarios',
  CARGAR_USERS_FAIL = '[Usuarios] Cargar usuarios fail',
  CARGAR_USERS_SUCCESS = '[Usuarios] Cargar usuarios success',
}

export class CargarUsuariosAction implements Action {
  readonly type = ACTIONS_USERS.CARGAR_USERS;
}

export class CargarUsuariosFailAction implements Action {
  readonly type = ACTIONS_USERS.CARGAR_USERS_FAIL;

  constructor(public payload: any) {
  }
}

export class CargarUsuariosSuccessAction implements Action {
  readonly type = ACTIONS_USERS.CARGAR_USERS_SUCCESS;

  constructor(public usuarios: User[]) {
  }
}

export type UsersActions =
  CargarUsuariosAction
  | CargarUsuariosFailAction
  | CargarUsuariosSuccessAction;
