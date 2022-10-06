import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { TimelineSource } from 'ngx-twitter-widgets/lib/entities/timeline-source';

@Component({
  selector: 'twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwitterTimelineComponent {

	loading = true;
	search: string = 'angular';
	source: TimelineSource | object = {
		sourceType: 'profile',
		screenName: this.search
	};
	changes = false;

  constructor(private ref: ChangeDetectorRef) { }

	change(): void {
		if (this.search) {
			this.source = {
				sourceType: 'profile',
				screenName: this.search
			};
			this.changes = true;
			this.loading = true;
			this.ref.detectChanges();
			setTimeout(() => {
				this.changes = false;
				this.ref.detectChanges();
			});
		}
	}

	onLoad(event): void {
			this.loading = false;
	}
}
