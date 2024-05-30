import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualServerComponent } from './individual-server.component';

describe('IndividualServerComponent', () => {
  let component: IndividualServerComponent;
  let fixture: ComponentFixture<IndividualServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualServerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
