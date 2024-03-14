import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixModalRouterComponent } from './pix-modal-router.component';

describe('PixModalRouterComponent', () => {
  let component: PixModalRouterComponent;
  let fixture: ComponentFixture<PixModalRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixModalRouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PixModalRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
