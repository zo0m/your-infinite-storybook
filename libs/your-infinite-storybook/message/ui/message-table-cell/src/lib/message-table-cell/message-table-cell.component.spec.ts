import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTableCellComponent } from './message-table-cell.component';

describe('MessageTableCellComponent', () => {
    let component: MessageTableCellComponent;
    let fixture: ComponentFixture<MessageTableCellComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageTableCellComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageTableCellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
