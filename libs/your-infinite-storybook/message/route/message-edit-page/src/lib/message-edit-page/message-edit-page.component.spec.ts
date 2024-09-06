import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEditPageComponent } from './message-edit-page.component';

describe('MessageEditPageComponent', () => {
    let component: MessageEditPageComponent;
    let fixture: ComponentFixture<MessageEditPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageEditPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageEditPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
