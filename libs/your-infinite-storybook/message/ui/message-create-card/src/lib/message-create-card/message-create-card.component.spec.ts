import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCreateCardComponent } from './message-create-card.component';

describe('MessageCreateCardComponent', () => {
    let component: MessageCreateCardComponent;
    let fixture: ComponentFixture<MessageCreateCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageCreateCardComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageCreateCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
