import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryEditButtonComponent } from './story-edit-button.component';

describe('StoryEditButtonComponent', () => {
    let component: StoryEditButtonComponent;
    let fixture: ComponentFixture<StoryEditButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryEditButtonComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryEditButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
