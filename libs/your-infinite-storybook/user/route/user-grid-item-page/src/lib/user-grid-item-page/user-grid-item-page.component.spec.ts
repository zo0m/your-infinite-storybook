import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGridItemPageComponent } from './user-grid-item-page.component';

describe('UserGridItemPageComponent', () => {
    let component: UserGridItemPageComponent;
    let fixture: ComponentFixture<UserGridItemPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserGridItemPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserGridItemPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
