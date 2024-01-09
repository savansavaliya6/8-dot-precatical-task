import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyPlatformComponent } from './technology-platform.component';

describe('TechnologyPlatformComponent', () => {
  let component: TechnologyPlatformComponent;
  let fixture: ComponentFixture<TechnologyPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyPlatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
