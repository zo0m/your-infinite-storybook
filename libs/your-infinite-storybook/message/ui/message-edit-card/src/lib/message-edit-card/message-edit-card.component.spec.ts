import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEditCardComponent } from './message-edit-card.component';

describe('MessageEditCardComponent', () => {
    let component: MessageEditCardComponent;
    let fixture: ComponentFixture<MessageEditCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageEditCardComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageEditCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
