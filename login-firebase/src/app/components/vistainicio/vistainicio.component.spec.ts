import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistainicioComponent } from './vistainicio.component';

describe('VistainicioComponent', () => {
  let component: VistainicioComponent;
  let fixture: ComponentFixture<VistainicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistainicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistainicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
