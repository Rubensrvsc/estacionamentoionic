import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaproprietariosPage } from './listaproprietarios.page';

describe('ListaproprietariosPage', () => {
  let component: ListaproprietariosPage;
  let fixture: ComponentFixture<ListaproprietariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaproprietariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaproprietariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
