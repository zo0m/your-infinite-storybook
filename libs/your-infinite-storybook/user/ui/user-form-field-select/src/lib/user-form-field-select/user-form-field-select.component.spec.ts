import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormFieldSelectComponent } from './user-form-field-select.component';

describe('UserFormFieldSelectComponent', () => {
    let component: UserFormFieldSelectComponent;
    let fixture: ComponentFixture<UserFormFieldSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserFormFieldSelectComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserFormFieldSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
