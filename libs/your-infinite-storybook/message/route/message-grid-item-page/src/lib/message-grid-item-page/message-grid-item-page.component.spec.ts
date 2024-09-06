import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageGridItemPageComponent } from './message-grid-item-page.component';

describe('MessageGridItemPageComponent', () => {
    let component: MessageGridItemPageComponent;
    let fixture: ComponentFixture<MessageGridItemPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageGridItemPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageGridItemPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
