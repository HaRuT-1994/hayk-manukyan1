import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  isCollapsed = true;

  menuItems = [
    {label: 'HEADER.HOME', path: 'home', type: 'home'},
    {label: 'HEADER.ABOUT', path: 'about', type: 'man'},
    {label: 'HEADER.NOTE', path: 'note', type: 'book'},
    {label: 'HEADER.CONTACT', path: 'contact', type: 'contacts'}
  ]

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(public tr: TranslateService) {}

}
