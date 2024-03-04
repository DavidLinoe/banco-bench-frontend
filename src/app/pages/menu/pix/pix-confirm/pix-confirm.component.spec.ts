import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixConfirmComponent } from './pix-confirm.component';

describe('PixConfirmComponent', () => {
  let component: PixConfirmComponent;
  let fixture: ComponentFixture<PixConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PixConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
