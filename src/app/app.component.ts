import { Component } from '@angular/core';
import { SharedService } from './services/sharedService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'e-commerce-app';
  showMenu: boolean = true;

  constructor(private sharedService: SharedService) {
    this.sharedService.menuCollapse.subscribe((res) => {
      this.showMenu = res;
    });
  }

  /**
   * this simple function created for closing side menu
   * @params event collapse value
   * @returns menu closed
   */
  closeMenu(event: any) {
    this.showMenu = event;
  }

  /**
   * this simple function created for toggling side menu
   * @returns menu toggled
   */
  toggleSideMenu() {
    this.showMenu = !this.showMenu;
  }
}
