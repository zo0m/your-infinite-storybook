import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFormFieldSelectComponent } from './story-form-field-select.component';

describe('StoryFormFieldSelectComponent', () => {
    let component: StoryFormFieldSelectComponent;
    let fixture: ComponentFixture<StoryFormFieldSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryFormFieldSelectComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryFormFieldSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
