import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menu = false;
  count = signal(0);

  toggleMenu() {
    if (this.menu) {
      this.menu = false;
    } else {
      this.menu = true;
    }
    console.log(this.menu);
  }

  getMenu(): boolean {
    return this.menu;
  }
}
