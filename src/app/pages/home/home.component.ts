import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AppTheme, ThemeService } from '@lib/services/theme';
import { Subject, takeUntil } from 'rxjs';

import { GrayCheckIconComponent } from '@lib/svgs/gray-check-icon/gray-check-icon.component';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        GrayCheckIconComponent,
        MatIconModule,
    ],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
    currentTheme!: AppTheme | null;

    private readonly _themeService = inject(ThemeService);

    private readonly _destroy$ = new Subject();

    ngOnInit(): void {
        this._themeService.currentTheme$
            .pipe(takeUntil(this._destroy$))
            .subscribe((theme) => (this.currentTheme = theme));
    }

    ngOnDestroy(): void {
        this._destroy$.complete();
        this._destroy$.unsubscribe();
    }

    handleThemeChange(theme: AppTheme): void {
        this._themeService.setTheme(theme);
    }
}
