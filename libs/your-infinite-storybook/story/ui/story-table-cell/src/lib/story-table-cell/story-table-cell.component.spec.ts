import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTableCellComponent } from './story-table-cell.component';

describe('StoryTableCellComponent', () => {
    let component: StoryTableCellComponent;
    let fixture: ComponentFixture<StoryTableCellComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryTableCellComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryTableCellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
