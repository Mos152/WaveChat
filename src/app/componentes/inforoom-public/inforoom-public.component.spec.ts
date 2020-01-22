import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InforoomPublicComponent } from './inforoom-public.component';

describe('InforoomPublicComponent', () => {
  let component: InforoomPublicComponent;
  let fixture: ComponentFixture<InforoomPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InforoomPublicComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InforoomPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
