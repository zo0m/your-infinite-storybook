import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRemoveButtonComponent } from './message-remove-button.component';

describe('MessageRemoveButtonComponent', () => {
    let component: MessageRemoveButtonComponent;
    let fixture: ComponentFixture<MessageRemoveButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageRemoveButtonComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageRemoveButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
