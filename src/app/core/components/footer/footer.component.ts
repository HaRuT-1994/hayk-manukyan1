import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public singerName: string = 'Hayk Manukyan';
  public singerDescription: string = 'A talented singer with a passion for music.';
  public currentYear: number = new Date().getFullYear();
  public emailAddress = 'hayk@gmail.com';
  public phoneNumber = '+8764872634786';
  public socialLinks = {
    facebook: 'https://www.facebook.com/your-singer',
    twitter: 'https://www.twitter.com/your-singer',
    instagram: 'https://www.instagram.com/your-singer',
    youtube: 'https://www.youtube.com/your-singer'
  };
}
