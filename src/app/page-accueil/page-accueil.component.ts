import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { BadgeModule } from 'primeng/badge';
import { ImageModule } from 'primeng/image';
import { TooltipModule } from 'primeng/tooltip';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-page-accueil',
  standalone: true,
  imports: [TabMenuModule,CommonModule,BadgeModule,ImageModule,TooltipModule,FieldsetModule,AvatarModule,CardModule,ButtonModule],
  providers :[TitleCasePipe],
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.css'
})
export class PageAccueilComponent implements OnInit{

  items: MenuItem[] | undefined;
  textsaisie :string | undefined

    activeItem: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home' },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
            { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' }
        ];

        this.activeItem = this.items[0];
    }
    title= " bienvenu chez nous"
    getInputValue(inputValue:string) {
        this.textsaisie = inputValue
      }
}
