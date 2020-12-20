import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddHoldingPage } from './add-holding.page';

describe('AddHoldingPage', () => {
  let component: AddHoldingPage;
  let fixture: ComponentFixture<AddHoldingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHoldingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddHoldingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
