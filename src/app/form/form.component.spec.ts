import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourFormComponent } from './form.component';

describe('FormComponent', () => {
  let component: YourFormComponent;
  let fixture: ComponentFixture<YourFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
