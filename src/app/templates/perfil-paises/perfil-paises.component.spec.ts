import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPaisesComponent } from './perfil-paises.component';

describe('HomeComponent', () => {
  let component: PerfilPaisesComponent;
  let fixture: ComponentFixture<PerfilPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
