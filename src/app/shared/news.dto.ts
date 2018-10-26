export class NewsDto {
  href: string;
  de: NewsPartDto;
  en: NewsPartDto;
}
export class NewsPartDto {
  title: string;
  desc: string;
  desc2: string;
  buttontext: string;
}
