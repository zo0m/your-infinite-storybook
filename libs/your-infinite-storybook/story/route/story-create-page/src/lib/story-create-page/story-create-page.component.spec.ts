import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCreatePageComponent } from './story-create-page.component';

describe('StoryCreatePageComponent', () => {
    let component: StoryCreatePageComponent;
    let fixture: ComponentFixture<StoryCreatePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryCreatePageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryCreatePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
