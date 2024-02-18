import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpixComponent } from './newpix.component';

describe('NewpixComponent', () => {
  let component: NewpixComponent;
  let fixture: ComponentFixture<NewpixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewpixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewpixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
