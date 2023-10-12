import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'gray-check-icon',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './gray-check-icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrayCheckIconComponent {}
