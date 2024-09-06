import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageGridItemComponent } from './message-grid-item.component';

describe('MessageGridItemComponent', () => {
    let component: MessageGridItemComponent;
    let fixture: ComponentFixture<MessageGridItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageGridItemComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageGridItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
