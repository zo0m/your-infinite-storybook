import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListItemPageComponent } from './user-list-item-page.component';

describe('UserListItemPageComponent', () => {
    let component: UserListItemPageComponent;
    let fixture: ComponentFixture<UserListItemPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserListItemPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserListItemPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
