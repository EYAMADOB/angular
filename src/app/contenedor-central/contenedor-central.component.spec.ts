import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorCentralComponent } from './contenedor-central.component';

describe('ContenedorCentralComponent', () => {
  let component: ContenedorCentralComponent;
  let fixture: ComponentFixture<ContenedorCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorCentralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenedorCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
