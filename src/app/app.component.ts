import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig, private titleService : Title) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
    public  updateTitle(title: string){
    this.titleService.setTitle(title )
    }
  title = 'test_app';
}
