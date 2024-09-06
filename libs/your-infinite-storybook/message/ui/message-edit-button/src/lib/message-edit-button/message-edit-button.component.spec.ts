import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEditButtonComponent } from './message-edit-button.component';

describe('MessageEditButtonComponent', () => {
    let component: MessageEditButtonComponent;
    let fixture: ComponentFixture<MessageEditButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageEditButtonComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageEditButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
