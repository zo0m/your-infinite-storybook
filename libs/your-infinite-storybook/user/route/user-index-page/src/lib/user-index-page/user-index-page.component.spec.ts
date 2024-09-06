import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIndexPageComponent } from './user-index-page.component';

describe('UserIndexPageComponent', () => {
    let component: UserIndexPageComponent;
    let fixture: ComponentFixture<UserIndexPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserIndexPageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserIndexPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
