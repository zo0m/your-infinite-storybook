import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFormFieldLinkComponent } from './story-form-field-link.component';

describe('StoryFormFieldLinkComponent', () => {
    let component: StoryFormFieldLinkComponent;
    let fixture: ComponentFixture<StoryFormFieldLinkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryFormFieldLinkComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryFormFieldLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
