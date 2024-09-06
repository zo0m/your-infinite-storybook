import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryGridComponent } from './story-grid.component';

describe('StoryGridComponent', () => {
    let component: StoryGridComponent;
    let fixture: ComponentFixture<StoryGridComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryGridComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
