import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface protoTopic {
  icon: string;
  name: string;
  category: string;
}

@Component({
  selector: 'app-by-topic',
  imports: [RouterLink],
  templateUrl: './by-topic.html',
  styleUrl: './by-topic.css',
})
export class ByTopic {
  Topics: protoTopic[] = [
    {
      icon: 'fa-solid fa-sliders',
      name: '5 مقاله',
      category: 'تقنيات',
    },

    {
      icon: 'fa-solid fa-mountain-sun',
      name: 'مقاله 2',
      category: 'مناظر طبيعيه',
    },

    {
      icon: 'fa-solid fa-user',
      name: '3 مقاله',
      category: 'بورتريه',
    },

    {
      icon: 'fa-solid fa-sun',
      name: '3 مقاله',
      category: 'إضاة',
    },

    {
      icon: 'fa-solid fa-sun',
      name: '3 مقاله',
      category: 'معدات',
    },
  ];
}
