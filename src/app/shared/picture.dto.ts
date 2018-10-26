export class PictureDto {
  url: string;
  url_min: string;
  size: string;
  de: PictureInfoDto;
  en: PictureInfoDto;
}

export class PictureInfoDto {
  title: string;
  desc: string;
  caption: string;
}
