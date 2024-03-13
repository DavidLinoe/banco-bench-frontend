import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixModalCopiaColaComponent } from './pix-modal-copia-cola.component';

describe('PixModalCopiaColaComponent', () => {
  let component: PixModalCopiaColaComponent;
  let fixture: ComponentFixture<PixModalCopiaColaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixModalCopiaColaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PixModalCopiaColaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
