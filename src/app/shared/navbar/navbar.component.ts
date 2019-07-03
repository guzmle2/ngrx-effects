import {Component, ElementRef, Injector, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'effects-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  router = this.injector.get(Router);
  @ViewChild('inputSerachId', {static: true}) inputSerachId: ElementRef;

  constructor(protected injector: Injector) {
  }

  ngOnInit() {
  }

  goUser() {
    const id = this.inputSerachId.nativeElement.value;
    if (!!id) {
      this.router.navigateByUrl(`/user/${id}`);
      this.inputSerachId.nativeElement.select();
    }
  }
}
