import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableItemPageComponent } from './user-table-item-page.component';

describe('UserTableItemPageComponent', () => {
    let component: UserTableItemPageComponent;
    let fixture: ComponentFixture<UserTableItemPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserTableItemPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserTableItemPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
