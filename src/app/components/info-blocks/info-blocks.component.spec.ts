import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBlocksComponent } from './info-blocks.component';

describe('InfoBlocksComponent', () => {
  let component: InfoBlocksComponent;
  let fixture: ComponentFixture<InfoBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoBlocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
