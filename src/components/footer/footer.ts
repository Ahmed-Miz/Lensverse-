import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  categories: string[] = ['إضاة', 'بورتريه', 'مناظر طبيعية', 'تقنبات'];
  explore: string[] = ['الرئيسية', 'المدونة', 'من نحن'];
  icon: string[] = [
    'fa-brands fa-youtube',
    'fa-brands fa-linkedin',
    'fa-brands fa-github',
    'fa-brands fa-x-twitter',
  ];
}
