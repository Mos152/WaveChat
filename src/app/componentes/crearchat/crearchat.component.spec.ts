import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearchatComponent } from './crearchat.component';

describe('CrearchatComponent', () => {
  let component: CrearchatComponent;
  let fixture: ComponentFixture<CrearchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearchatComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
