import { AfterViewInit, Component, DestroyRef, ElementRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
    selector: 'app-landing',
    imports: [
        RouterLink,
    ],
    templateUrl: './landing.html',
    styleUrls: [
        './landing.scss',
    ],
})
export class Landing implements AfterViewInit {
    private readonly _destroyRef = inject(DestroyRef);
    private readonly _activatedRoute = inject(ActivatedRoute);
    private readonly _hostRef = inject<ElementRef<HTMLElement>>(ElementRef<HTMLElement>);

    public ngAfterViewInit(): void {
        this._activatedRoute.fragment
            .pipe(
                takeUntilDestroyed(this._destroyRef),
            )
            .subscribe(fragment => {
                if (!fragment) {
                    return;
                }

                const element = this._hostRef.nativeElement.querySelector('#' + fragment);

                if (element) {
                    this._hostRef.nativeElement.scrollTo({
                        top: (element as HTMLElement).offsetTop,
                        behavior: 'smooth',
                    });
                }
            });
    }
}
