import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFormFieldSelectComponent } from './message-form-field-select.component';

describe('MessageFormFieldSelectComponent', () => {
    let component: MessageFormFieldSelectComponent;
    let fixture: ComponentFixture<MessageFormFieldSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageFormFieldSelectComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageFormFieldSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
