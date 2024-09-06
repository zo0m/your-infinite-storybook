import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryGridItemPageComponent } from './story-grid-item-page.component';

describe('StoryGridItemPageComponent', () => {
    let component: StoryGridItemPageComponent;
    let fixture: ComponentFixture<StoryGridItemPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryGridItemPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryGridItemPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
