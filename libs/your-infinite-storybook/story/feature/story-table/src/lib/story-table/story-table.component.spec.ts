import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTableComponent } from './story-table.component';

describe('StoryTableComponent', () => {
    let component: StoryTableComponent;
    let fixture: ComponentFixture<StoryTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryTableComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
