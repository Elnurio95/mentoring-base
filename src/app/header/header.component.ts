import { AsyncPipe, DatePipe, NgFor, NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { YellowOnBotton } from "../directives/yellow.directive";
import { MatDialog } from "@angular/material/dialog";
import { AuthComponent } from "../auth/auth.component";
import { UserService } from "../user.service";




@Component ({
    selector: 'app-header',
    imports: [NgFor, RouterLink, DatePipe, YellowOnBotton, AsyncPipe, NgIf], 
    templateUrl: './header.component.html', 
    styleUrl: './header.component.scss',
    standalone: true,
})

export class headerComponent { 
    private readonly dialog = inject(MatDialog); 
    public readonly userService = inject(UserService);
    public isUpperCase = true; 
    public isShowImg = false; 

    public readonly aboutCompany = newName;
    public menuItems = menuItems; 

    public currentDate = new Date(); 

    changeText() {
        this.menuItems = this.menuItems.map(item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
        ); 
        this.isUpperCase = !this.isUpperCase; 
      }

    
      public openDialog(): void {
        const dialogRef = this.dialog.open(AuthComponent, {
          width: "400px", 
          height: "200px"
        });
    
        dialogRef.afterClosed().subscribe((result: string) => {
          console.log(result); 
          if (result === 'admin') {
            this.userService.loginAsAdmin()
          } else if (result === 'user') {
            this.userService.loginAsUser()
          } else {
            return undefined; 
          }
        });
      }

      public logout() {
        if (confirm("Вы точно хотите выйти ?")) {
          console.log("logout");
          return this.userService.logout(); 
        }
        else return false; 
      }
}; 

const newName = getMenuName("О компании"); 
function getMenuName(menuName: string) {
    return menuName; 
  }

let menuItems = ['Каталог','Стройматериалы','Инструменты','Электрика','Интерьер и одежда']; 
