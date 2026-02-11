import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTopic } from './by-topic';

describe('ByTopic', () => {
  let component: ByTopic;
  let fixture: ComponentFixture<ByTopic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByTopic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByTopic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
