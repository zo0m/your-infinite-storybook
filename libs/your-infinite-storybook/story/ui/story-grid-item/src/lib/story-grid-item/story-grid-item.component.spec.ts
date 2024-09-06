import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryGridItemComponent } from './story-grid-item.component';

describe('StoryGridItemComponent', () => {
    let component: StoryGridItemComponent;
    let fixture: ComponentFixture<StoryGridItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryGridItemComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryGridItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
