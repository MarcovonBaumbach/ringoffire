import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMissingDialogComponent } from './player-missing-dialog.component';

describe('PlayerMissingDialogComponent', () => {
  let component: PlayerMissingDialogComponent;
  let fixture: ComponentFixture<PlayerMissingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerMissingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerMissingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
