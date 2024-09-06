import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCreateButtonComponent } from './message-create-button.component';

describe('MessageCreateButtonComponent', () => {
    let component: MessageCreateButtonComponent;
    let fixture: ComponentFixture<MessageCreateButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageCreateButtonComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageCreateButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
