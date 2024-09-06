import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFormFieldSearchComponent } from './message-form-field-search.component';

describe('MessageFormFieldSearchComponent', () => {
    let component: MessageFormFieldSearchComponent;
    let fixture: ComponentFixture<MessageFormFieldSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageFormFieldSearchComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageFormFieldSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
