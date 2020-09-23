import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MembrosPage } from './membros.page';

describe('MembrosPage', () => {
  let component: MembrosPage;
  let fixture: ComponentFixture<MembrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MembrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
