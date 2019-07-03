import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user.model.';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {CargarUsuariosAction} from '../../store/actions';
import {Router} from '@angular/router';

@Component({
  selector: 'effects-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent implements OnInit, OnDestroy {

  users: User[] = [];
  subscription: Subscription[] = [];
  isLoading: boolean;
  error: any;

  store = this.injector.get(Store);
  router = this.injector.get(Router);

  constructor(protected injector: Injector) {
    const subs1 = this.store.select('users')
      .subscribe(e => {
        this.users = e.users;
        this.isLoading = e.loading;
        this.error = e.error;
      });

    this.subscription.push(subs1);
  }

  ngOnInit() {
    this.store.dispatch(new CargarUsuariosAction());

  }


  ngOnDestroy(): void {
    for (const subs of this.subscription) {
      subs.unsubscribe();
    }
  }

  goUser(user) {
    this.router.navigateByUrl('user/' + user.id);
  }

}
