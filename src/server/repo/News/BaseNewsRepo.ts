import { BaseNewsType, NewsIDType, NewsType } from "../../../types/News";

export abstract class BaseNewsRepo {
  abstract addNews(news: BaseNewsType): Promise<NewsIDType>;
  abstract getAllNews(): Promise<NewsType[]>
  abstract getNewsById(id: NewsIDType): Promise<NewsType | undefined>
}
