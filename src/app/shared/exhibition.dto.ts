export class ExhibitionDto {
  url: string;
  'date-start': string;
  'date-end': string;
  'print-version': string;
  contact: {
    url: string;
    text: {
      de: string;
      en: string;
    }
  };
  vernissage: ExhibitionPartDto;
  finissage: ExhibitionPartDto;
  opening_text: {
    de: string;
    en: string;
  };
  opening: ExhibitionOpeningsDto[];
  picture_url: string;
  de: ExhibitionInfoDto;
  en: ExhibitionInfoDto;
}

export class ExhibitionPartDto {
  title: {
    de: string;
    en: string;
  };
  from: string;
  date: string;
}

export class ExhibitionOpeningsDto {
  from: string;
  to: string;
  day: {
    de: string;
    en: string;
  };
}

export class ExhibitionInfoDto {
  title: string;
  text: string;
  'picture_alt_text': string;
}
