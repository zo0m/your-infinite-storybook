import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageLinkComponent } from './message-link.component';

describe('MessageLinkComponent', () => {
    let component: MessageLinkComponent;
    let fixture: ComponentFixture<MessageLinkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageLinkComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
