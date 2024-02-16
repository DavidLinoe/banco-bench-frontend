import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletoComponent } from './boleto.component';

describe('BoletoComponent', () => {
  let component: BoletoComponent;
  let fixture: ComponentFixture<BoletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoletoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
