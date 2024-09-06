import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCreatePageComponent } from './message-create-page.component';

describe('MessageCreatePageComponent', () => {
    let component: MessageCreatePageComponent;
    let fixture: ComponentFixture<MessageCreatePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageCreatePageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageCreatePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
