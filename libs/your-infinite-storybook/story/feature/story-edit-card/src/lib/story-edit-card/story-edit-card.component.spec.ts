import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryEditCardComponent } from './story-edit-card.component';

describe('StoryEditCardComponent', () => {
    let component: StoryEditCardComponent;
    let fixture: ComponentFixture<StoryEditCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryEditCardComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryEditCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
