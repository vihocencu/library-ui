import { Component, ViewChild, EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-ui';
  @ViewChild(NavBarComponent) subject:NavBarComponent;
  subscription:Subscription;
  next:string;
  p: Promise<any> ;
  constructor(private router: Router) {}

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.subscription = this.subject.someEvent.subscribe((data) => {this.next = data;this.handleRoute();});  
  }

  handleRoute() {
    console.log('handleRoute'+this.next);
    if (this.next === 'Add') {
      console.log(this.next);
      this.p = this.router.navigate(['/booksAdd']);
    }
    if (this.next === 'Search') {
      console.log(this.next);
      this.p = this.router.navigate(['/booksSearch']);
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
