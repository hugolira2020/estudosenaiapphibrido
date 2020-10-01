import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalComidaPage } from './modal-comida.page';

describe('ModalComidaPage', () => {
  let component: ModalComidaPage;
  let fixture: ComponentFixture<ModalComidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
