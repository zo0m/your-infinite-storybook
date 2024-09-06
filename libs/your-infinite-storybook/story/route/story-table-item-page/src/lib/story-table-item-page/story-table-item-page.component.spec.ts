import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTableItemPageComponent } from './story-table-item-page.component';

describe('StoryTableItemPageComponent', () => {
    let component: StoryTableItemPageComponent;
    let fixture: ComponentFixture<StoryTableItemPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryTableItemPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryTableItemPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
