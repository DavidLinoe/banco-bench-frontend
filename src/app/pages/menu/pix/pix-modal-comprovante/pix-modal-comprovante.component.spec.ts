import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixModalComprovanteComponent } from './pix-modal-comprovante.component';

describe('PixModalComprovanteComponent', () => {
  let component: PixModalComprovanteComponent;
  let fixture: ComponentFixture<PixModalComprovanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixModalComprovanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PixModalComprovanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
