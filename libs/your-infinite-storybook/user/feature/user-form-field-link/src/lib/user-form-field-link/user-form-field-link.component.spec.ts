import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormFieldLinkComponent } from './user-form-field-link.component';

describe('UserFormFieldLinkComponent', () => {
    let component: UserFormFieldLinkComponent;
    let fixture: ComponentFixture<UserFormFieldLinkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserFormFieldLinkComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserFormFieldLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
