import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponentExampleComponent } from './title-component-example.component';

describe('TitleComponentExampleComponent', () => {
  let component: TitleComponentExampleComponent;
  let fixture: ComponentFixture<TitleComponentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleComponentExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
