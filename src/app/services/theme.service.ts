import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = false;

  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    if (this.darkMode) {
      this.darkMode = false;
    } else {
      this.darkMode = true;
    }
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
  }

  loadTheme() {
    const actualTheme = localStorage.getItem('darkMode');
    if (actualTheme) {
      this.darkMode = JSON.parse(actualTheme);
    }
  }

  getTheme(): boolean {
    return this.darkMode;
  }
}
