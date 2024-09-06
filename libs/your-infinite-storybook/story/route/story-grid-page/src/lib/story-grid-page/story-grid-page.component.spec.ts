import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryGridPageComponent } from './story-grid-page.component';

describe('StoryGridPageComponent', () => {
    let component: StoryGridPageComponent;
    let fixture: ComponentFixture<StoryGridPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryGridPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryGridPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
