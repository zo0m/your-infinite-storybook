import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryIndexPageComponent } from './story-index-page.component';

describe('StoryIndexPageComponent', () => {
    let component: StoryIndexPageComponent;
    let fixture: ComponentFixture<StoryIndexPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryIndexPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryIndexPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
