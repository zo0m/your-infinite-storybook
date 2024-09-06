import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCreateButtonComponent } from './story-create-button.component';

describe('StoryCreateButtonComponent', () => {
    let component: StoryCreateButtonComponent;
    let fixture: ComponentFixture<StoryCreateButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryCreateButtonComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryCreateButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
