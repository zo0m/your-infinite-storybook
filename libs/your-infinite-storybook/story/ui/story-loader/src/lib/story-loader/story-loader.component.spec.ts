import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryLoaderComponent } from './story-loader.component';

describe('StoryLoaderComponent', () => {
    let component: StoryLoaderComponent;
    let fixture: ComponentFixture<StoryLoaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StoryLoaderComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StoryLoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
