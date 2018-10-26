import {Contact} from './contact';

export class MeDto {
  picture: string;
  en: MeInfo;
  de: MeInfo;
}

export class MeInfo {
  title: string;
  text: string[];
}
