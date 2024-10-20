import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonThemeComponent } from '../button-theme/button-theme.component';
import { ButtonMenuComponent } from '../button-menu/button-menu.component';
import { MenuService } from '../../services/menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    ButtonThemeComponent,
    ButtonMenuComponent,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  constructor(private menuService: MenuService) {}

  get menu(): boolean {
    return this.menuService.getMenu();
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
