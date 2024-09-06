import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCardPageComponent } from './story-card-page.component';

describe('StoryCardPageComponent', () => {
    let component: StoryCardPageComponent;
    let fixture: ComponentFixture<StoryCardPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryCardPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryCardPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
