import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInlineListComponent } from './message-inline-list.component';

describe('MessageInlineListComponent', () => {
    let component: MessageInlineListComponent;
    let fixture: ComponentFixture<MessageInlineListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageInlineListComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageInlineListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
