import { ChangeDetectionStrategy, Component, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.scss'],
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowVideoComponent {

  get videoId(): any {
    const id = this.route.snapshot.paramMap.get('id') || '';
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
  }

  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer) {
  }
}
