import {ContactDto} from './contact.dto';
import {ExhibitionDto} from './exhibition.dto';
import {MeDto} from './me.dto';
import {PictureDto} from './picture.dto';
import {NavigatortextDto} from './navigatortextDto';
import {NewsDto} from './news.dto';

export class DataDto {
  picture: PictureDto[];
  general: any;
  navigator: NavigatortextDto;
  me: MeDto;
  contact: ContactDto;
  exhibition: ExhibitionDto[];
  news: NewsDto;
}
