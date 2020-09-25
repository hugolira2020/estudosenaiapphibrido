import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDeputadoPage } from './modal-deputado.page';

describe('ModalDeputadoPage', () => {
  let component: ModalDeputadoPage;
  let fixture: ComponentFixture<ModalDeputadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeputadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDeputadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
