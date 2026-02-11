import { Component } from '@angular/core';
import { Articles } from './articles/articles';
import { ByTopic } from './by-topic/by-topic';
import { LatestArticles } from '../latest-articles/latest-articles';

@Component({
  selector: 'app-home',
  imports: [Articles, ByTopic, LatestArticles],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
