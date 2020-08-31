import { NgModule, Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  template: `<button class="btn btn-primary" (click)="submit()">Home</button>`,
})
class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(+params.get('id'));
    });
  }

  submit() {
    this.router.navigate(['/test'], {
      queryParams: { page: 2, order: 'new' },
    });
  }
}

@Component({
  selector: 'test',
  template: '<h1>Test</h1>',
})
class TestComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // notifies whenever id changes
    // this.route.paramMap.subscribe((params) => {
    //   console.log(+params.get('id'));
    // });
    console.log(this.route.paramMap['id']);
    console.log(
      this.route.snapshot.paramMap.get('id'),
      this.route.snapshot.paramMap.get('username'),
      this.route.snapshot.queryParamMap.get('page')
    );
  }
}

const routes: Routes = [
  {
    path: 'test',
    component: HomeComponent,
  },
  {
    path: 'test/:id/:username',
    component: TestComponent,
  },
];

// {path:'followers',component:Component}

// '**'->NOt Found
// represents remaining routes
// should be at last remaining routes
// <router-outlet></router-outlet>
// routerLink="/routers"
// routerLinkActive="active current" css class of selected links
// SinglePageApplications a single page is downloaded from server and as user
// moves from one page to another only content of current page is downloaded

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
