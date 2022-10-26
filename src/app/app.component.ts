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

  closeMenu(event: any) {
    this.showMenu = event;
  }

  showSideMenu() {
    this.showMenu = !this.showMenu;
  }
}
