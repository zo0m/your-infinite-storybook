import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInlineListItemComponent } from './message-inline-list-item.component';

describe('MessageInlineListItemComponent', () => {
    let component: MessageInlineListItemComponent;
    let fixture: ComponentFixture<MessageInlineListItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageInlineListItemComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageInlineListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
