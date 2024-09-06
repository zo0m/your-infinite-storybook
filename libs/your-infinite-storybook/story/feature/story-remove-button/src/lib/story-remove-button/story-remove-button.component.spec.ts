import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryRemoveButtonComponent } from './story-remove-button.component';

describe('StoryRemoveButtonComponent', () => {
    let component: StoryRemoveButtonComponent;
    let fixture: ComponentFixture<StoryRemoveButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryRemoveButtonComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryRemoveButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
