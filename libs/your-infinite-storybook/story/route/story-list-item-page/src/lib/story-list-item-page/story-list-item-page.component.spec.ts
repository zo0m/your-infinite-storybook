import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryListItemPageComponent } from './story-list-item-page.component';

describe('StoryListItemPageComponent', () => {
    let component: StoryListItemPageComponent;
    let fixture: ComponentFixture<StoryListItemPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryListItemPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryListItemPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
