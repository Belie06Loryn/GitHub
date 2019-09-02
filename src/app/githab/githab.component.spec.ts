import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithabComponent } from './githab.component';

describe('GithabComponent', () => {
  let component: GithabComponent;
  let fixture: ComponentFixture<GithabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
