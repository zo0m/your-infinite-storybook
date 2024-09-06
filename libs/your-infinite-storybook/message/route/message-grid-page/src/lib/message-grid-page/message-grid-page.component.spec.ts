import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageGridPageComponent } from './message-grid-page.component';

describe('MessageGridPageComponent', () => {
    let component: MessageGridPageComponent;
    let fixture: ComponentFixture<MessageGridPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageGridPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageGridPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
