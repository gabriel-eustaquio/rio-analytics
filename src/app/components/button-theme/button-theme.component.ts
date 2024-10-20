import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-button-theme',
  standalone: true,
  imports: [],
  templateUrl: './button-theme.component.html',
  styleUrl: './button-theme.component.scss',
})
export class ButtonThemeComponent {
  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
