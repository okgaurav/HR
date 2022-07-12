import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRecommendationComponent } from './post-recommendation.component';

describe('PostRecommendationComponent', () => {
  let component: PostRecommendationComponent;
  let fixture: ComponentFixture<PostRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
