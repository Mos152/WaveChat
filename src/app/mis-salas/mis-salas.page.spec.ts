import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisSalasPage } from './mis-salas.page';

describe('MisSalasPage', () => {
  let component: MisSalasPage;
  let fixture: ComponentFixture<MisSalasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisSalasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisSalasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
