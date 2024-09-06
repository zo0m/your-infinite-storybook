import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageIndexPageComponent } from './message-index-page.component';

describe('MessageIndexPageComponent', () => {
    let component: MessageIndexPageComponent;
    let fixture: ComponentFixture<MessageIndexPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageIndexPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageIndexPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
