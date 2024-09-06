import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRemoveButtonComponent } from './user-remove-button.component';

describe('UserRemoveButtonComponent', () => {
    let component: UserRemoveButtonComponent;
    let fixture: ComponentFixture<UserRemoveButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserRemoveButtonComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserRemoveButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
