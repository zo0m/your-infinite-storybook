import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGridPageComponent } from './user-grid-page.component';

describe('UserGridPageComponent', () => {
    let component: UserGridPageComponent;
    let fixture: ComponentFixture<UserGridPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserGridPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserGridPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
