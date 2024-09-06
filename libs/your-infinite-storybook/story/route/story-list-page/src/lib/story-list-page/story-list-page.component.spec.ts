import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryListPageComponent } from './story-list-page.component';

describe('StoryListPageComponent', () => {
    let component: StoryListPageComponent;
    let fixture: ComponentFixture<StoryListPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryListPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryListPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
