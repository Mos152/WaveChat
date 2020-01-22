import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InforoomComponent } from './inforoom.component';

describe('InforoomComponent', () => {
  let component: InforoomComponent;
  let fixture: ComponentFixture<InforoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InforoomComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InforoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
