import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PostsComponent} from "./posts/posts.component";
import {PostComponent} from "./post/post.component";
import {AboutExtraComponent} from "./about-extra/about-extra.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent, children: [
     {path: 'extra', component: AboutExtraComponent},
    ]},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
  // last path for others

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
