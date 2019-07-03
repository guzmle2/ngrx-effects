import {Action} from '@ngrx/store';
import {User} from '../../models/user.model.';

export enum ACTIONS_USER {
  CARGAR_USER = '[USUARIO] Cargar usuario',
  CARGAR_USER_FAIL = '[USUARIO] Cargar usuario fail',
  CARGAR_USER_SUCCESS = '[USUARIO] Cargar usuario success',
}

export class CargarUsuarioAction implements Action {
  readonly type = ACTIONS_USER.CARGAR_USER;

  constructor(public id: string) {
  }
}

export class CargarUsuarioFailAction implements Action {
  readonly type = ACTIONS_USER.CARGAR_USER_FAIL;

  constructor(public payload: any) {
  }
}

export class CargarUsuarioSuccessAction implements Action {
  readonly type = ACTIONS_USER.CARGAR_USER_SUCCESS;

  constructor(public user: User) {
  }
}

export type UserActions =
  CargarUsuarioAction
  | CargarUsuarioFailAction
  | CargarUsuarioSuccessAction;
