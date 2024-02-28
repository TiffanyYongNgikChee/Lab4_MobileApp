import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcomponenetComponent } from './listcomponenet.component';

describe('ListcomponenetComponent', () => {
  let component: ListcomponenetComponent;
  let fixture: ComponentFixture<ListcomponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListcomponenetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListcomponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
