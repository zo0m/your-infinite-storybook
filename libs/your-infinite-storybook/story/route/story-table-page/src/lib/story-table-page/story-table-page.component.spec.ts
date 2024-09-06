import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTablePageComponent } from './story-table-page.component';

describe('StoryTablePageComponent', () => {
    let component: StoryTablePageComponent;
    let fixture: ComponentFixture<StoryTablePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryTablePageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryTablePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
