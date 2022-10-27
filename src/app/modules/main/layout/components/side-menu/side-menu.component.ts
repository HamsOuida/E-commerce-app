import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/sharedService.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  displaySidebar: boolean = true;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  /**
   * this simple function created for closing side panel
   * @returns returns panel closed
   */
  closeSideBar(): void {
    this.displaySidebar = false;
    this.sharedService.menuCollapse.next(this.displaySidebar);
  }
}
