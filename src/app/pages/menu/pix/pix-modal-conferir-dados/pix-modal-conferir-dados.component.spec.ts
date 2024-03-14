import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixModalConferirDadosComponent } from './pix-modal-conferir-dados.component';

describe('PixModalConferirDadosComponent', () => {
  let component: PixModalConferirDadosComponent;
  let fixture: ComponentFixture<PixModalConferirDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixModalConferirDadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PixModalConferirDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
