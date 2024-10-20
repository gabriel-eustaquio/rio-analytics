import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-button-menu',
  standalone: true,
  imports: [],
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.scss',
})
export class ButtonMenuComponent {
  constructor(private menuService: MenuService) {}

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
