import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCardPageComponent } from './message-card-page.component';

describe('MessageCardPageComponent', () => {
    let component: MessageCardPageComponent;
    let fixture: ComponentFixture<MessageCardPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageCardPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageCardPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
