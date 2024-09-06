import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormFieldSearchComponent } from './user-form-field-search.component';

describe('UserFormFieldSearchComponent', () => {
    let component: UserFormFieldSearchComponent;
    let fixture: ComponentFixture<UserFormFieldSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserFormFieldSearchComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserFormFieldSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
