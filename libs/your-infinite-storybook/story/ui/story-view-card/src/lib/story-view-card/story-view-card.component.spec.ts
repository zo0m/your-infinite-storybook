import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryViewCardComponent } from './story-view-card.component';

describe('StoryViewCardComponent', () => {
    let component: StoryViewCardComponent;
    let fixture: ComponentFixture<StoryViewCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryViewCardComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryViewCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
