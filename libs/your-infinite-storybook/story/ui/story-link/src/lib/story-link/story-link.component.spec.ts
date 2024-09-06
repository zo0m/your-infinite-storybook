import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryLinkComponent } from './story-link.component';

describe('StoryLinkComponent', () => {
    let component: StoryLinkComponent;
    let fixture: ComponentFixture<StoryLinkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryLinkComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
