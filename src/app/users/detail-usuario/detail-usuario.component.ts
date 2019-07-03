import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {CargarUsuarioAction} from '../../store/actions';
import {Subscription} from 'rxjs';
import {User} from '../../models/user.model.';

@Component({
  selector: 'effects-detail-usuario',
  templateUrl: './detail-usuario.component.html',
  styleUrls: ['./detail-usuario.component.scss']
})
export class DetailUsuarioComponent implements OnInit, OnDestroy {

  activateRouter = this.injector.get(ActivatedRoute);
  store = this.injector.get(Store);
  subscription: Subscription[] = [];
  user: User;

  constructor(protected injector: Injector) {
    const subs = this.store.select('user').subscribe(e => this.user = e.user);
    this.subscription.push(subs);

  }

  ngOnInit() {
    this.activateRouter.params.subscribe(params => {
      const id = params.id;
      if (!!id) {
        this.store.dispatch(new CargarUsuarioAction(id));
      }
    });
  }

  ngOnDestroy(): void {
    for (const subs of this.subscription) {
      subs.unsubscribe();
    }
  }
}
