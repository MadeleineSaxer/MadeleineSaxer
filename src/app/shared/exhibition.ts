export class Exhibition {
  title: string;
  text: string;
  picture_alt_text: string;

  url: string;
  date_start: string;
  date_end: string;
  print_version: string;
  contact: {
    url: string;
    text: string;
  };
  vernissage: ExhibitionPart;
  finissage: ExhibitionPart;
  opening_text: string;
  opening: ExhibitionOpenings[];
  picture_url: string;
}

export class ExhibitionPart {
  title: string;
  from: string;
  date: string;
}

export class ExhibitionOpenings {
  from: string;
  to: string;
  day: string;
}
