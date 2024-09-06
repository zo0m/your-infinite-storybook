import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGridItemComponent } from './user-grid-item.component';

describe('UserGridItemComponent', () => {
    let component: UserGridItemComponent;
    let fixture: ComponentFixture<UserGridItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserGridItemComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserGridItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
