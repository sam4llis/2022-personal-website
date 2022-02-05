import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMononautComponent } from './project-mononaut.component';

describe('ProjectMononautComponent', () => {
  let component: ProjectMononautComponent;
  let fixture: ComponentFixture<ProjectMononautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMononautComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMononautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
