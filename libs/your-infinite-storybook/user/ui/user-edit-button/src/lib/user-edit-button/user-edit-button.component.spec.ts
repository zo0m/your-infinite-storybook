import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditButtonComponent } from './user-edit-button.component';

describe('UserEditButtonComponent', () => {
    let component: UserEditButtonComponent;
    let fixture: ComponentFixture<UserEditButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserEditButtonComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserEditButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
