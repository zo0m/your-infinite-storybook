import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCreateCardComponent } from './story-create-card.component';

describe('StoryCreateCardComponent', () => {
    let component: StoryCreateCardComponent;
    let fixture: ComponentFixture<StoryCreateCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryCreateCardComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryCreateCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
