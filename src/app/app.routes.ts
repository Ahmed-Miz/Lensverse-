import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { About } from '../components/about/about';
import { Blog } from '../components/blog/blog';
import { DataCard } from '../components/data-card/data-card';

export const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full', title: 'home' },
  { path: 'home', component: Home, title: 'home' },
  { path: 'about', component: About, title: 'about' },
  { path: 'blog', component: Blog, title: 'blog' },
  { path: 'article-details/:id', component: DataCard },
];
