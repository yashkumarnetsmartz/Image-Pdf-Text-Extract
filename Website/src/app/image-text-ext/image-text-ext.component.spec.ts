import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextExtComponent } from './image-text-ext.component';

describe('ImageTextExtComponent', () => {
  let component: ImageTextExtComponent;
  let fixture: ComponentFixture<ImageTextExtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTextExtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTextExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
