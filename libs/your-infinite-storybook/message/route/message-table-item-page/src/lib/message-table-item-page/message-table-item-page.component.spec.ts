import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTableItemPageComponent } from './message-table-item-page.component';

describe('MessageTableItemPageComponent', () => {
    let component: MessageTableItemPageComponent;
    let fixture: ComponentFixture<MessageTableItemPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageTableItemPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageTableItemPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
