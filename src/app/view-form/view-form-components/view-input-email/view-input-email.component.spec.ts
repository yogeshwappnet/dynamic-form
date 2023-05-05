import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInputEmailComponent } from './view-input-email.component';

describe('ViewInputEmailComponent', () => {
  let component: ViewInputEmailComponent;
  let fixture: ComponentFixture<ViewInputEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInputEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInputEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
