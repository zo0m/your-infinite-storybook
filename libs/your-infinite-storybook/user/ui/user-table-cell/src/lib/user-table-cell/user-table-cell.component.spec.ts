import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableCellComponent } from './user-table-cell.component';

describe('UserTableCellComponent', () => {
    let component: UserTableCellComponent;
    let fixture: ComponentFixture<UserTableCellComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserTableCellComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserTableCellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
