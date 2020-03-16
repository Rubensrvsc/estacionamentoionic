import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListavagaspropPage } from './listavagasprop.page';

describe('ListavagaspropPage', () => {
  let component: ListavagaspropPage;
  let fixture: ComponentFixture<ListavagaspropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListavagaspropPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListavagaspropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
