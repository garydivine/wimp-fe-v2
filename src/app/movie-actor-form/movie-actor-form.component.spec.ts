import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieActorFormComponent } from './movie-actor-form.component';

describe('MovieActorFormComponent', () => {
  let component: MovieActorFormComponent;
  let fixture: ComponentFixture<MovieActorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieActorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieActorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
