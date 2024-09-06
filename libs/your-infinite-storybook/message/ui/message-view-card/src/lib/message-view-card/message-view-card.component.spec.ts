import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageViewCardComponent } from './message-view-card.component';

describe('MessageViewCardComponent', () => {
    let component: MessageViewCardComponent;
    let fixture: ComponentFixture<MessageViewCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageViewCardComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageViewCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
