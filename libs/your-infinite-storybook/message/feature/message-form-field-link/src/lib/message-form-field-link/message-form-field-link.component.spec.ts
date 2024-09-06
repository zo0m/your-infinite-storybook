import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFormFieldLinkComponent } from './message-form-field-link.component';

describe('MessageFormFieldLinkComponent', () => {
    let component: MessageFormFieldLinkComponent;
    let fixture: ComponentFixture<MessageFormFieldLinkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageFormFieldLinkComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageFormFieldLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
