import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryEditPageComponent } from './story-edit-page.component';

describe('StoryEditPageComponent', () => {
    let component: StoryEditPageComponent;
    let fixture: ComponentFixture<StoryEditPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryEditPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryEditPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
