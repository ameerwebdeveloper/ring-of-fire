import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerDialogComponent } from './add-player-dialog.component';

describe('AddPlayerDialogComponent', () => {
  let component: AddPlayerDialogComponent;
  let fixture: ComponentFixture<AddPlayerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlayerDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPlayerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
