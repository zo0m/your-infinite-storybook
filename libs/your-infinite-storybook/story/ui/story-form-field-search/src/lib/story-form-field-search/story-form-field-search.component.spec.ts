import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFormFieldSearchComponent } from './story-form-field-search.component';

describe('StoryFormFieldSearchComponent', () => {
    let component: StoryFormFieldSearchComponent;
    let fixture: ComponentFixture<StoryFormFieldSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryFormFieldSearchComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryFormFieldSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
