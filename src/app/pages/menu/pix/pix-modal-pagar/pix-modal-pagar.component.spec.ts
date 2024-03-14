import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixModalPagarComponent } from './pix-modal-pagar.component';

describe('PixModalPagarComponent', () => {
  let component: PixModalPagarComponent;
  let fixture: ComponentFixture<PixModalPagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixModalPagarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PixModalPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
