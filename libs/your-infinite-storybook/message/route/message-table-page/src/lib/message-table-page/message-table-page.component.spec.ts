import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTablePageComponent } from './message-table-page.component';

describe('MessageTablePageComponent', () => {
    let component: MessageTablePageComponent;
    let fixture: ComponentFixture<MessageTablePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageTablePageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageTablePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
