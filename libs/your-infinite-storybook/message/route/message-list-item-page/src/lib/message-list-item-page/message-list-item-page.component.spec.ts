import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListItemPageComponent } from './message-list-item-page.component';

describe('MessageListItemPageComponent', () => {
    let component: MessageListItemPageComponent;
    let fixture: ComponentFixture<MessageListItemPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageListItemPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageListItemPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
