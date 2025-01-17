import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAltaProductoComponent } from './form-alta-producto.component';

describe('FormAltaProductoComponent', () => {
  let component: FormAltaProductoComponent;
  let fixture: ComponentFixture<FormAltaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAltaProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAltaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
