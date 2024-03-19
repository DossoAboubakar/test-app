import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccueilComponent } from './page-accueil.component';
import { TitleCasePipe } from '@angular/common';

describe('PageAccueilComponent', () => {
  let component: PageAccueilComponent;
  let fixture: ComponentFixture<PageAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAccueilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
