import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatchatprivadosComponent } from './creatchatprivados.component';

describe('CreatchatprivadosComponent', () => {
  let component: CreatchatprivadosComponent;
  let fixture: ComponentFixture<CreatchatprivadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatchatprivadosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatchatprivadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
