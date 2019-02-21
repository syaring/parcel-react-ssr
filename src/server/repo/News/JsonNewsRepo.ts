import { BaseNewsRepo } from './BaseNewsRepo'
import { BaseNewsType, NewsIDType, NewsType } from '../../../types/News';
import * as wu from 'wu'
export class JsonNewsRepo extends BaseNewsRepo {
  
  data: Map<NewsIDType, NewsType> = new Map()
  async addNews(news: BaseNewsType): Promise<NewsIDType> {
    const id = news.title as NewsIDType
    const savedNews = {
      id,
      ...news,
    }
    this.data.set(id, savedNews)
    return id
  }
  
  async getAllNews(): Promise<NewsType[]> {
    return wu(this.data)
      .map(([, news]) => news)
      .toArray()
  }

  async getNewsById(id: NewsIDType): Promise<NewsType | undefined> {
    return wu(this.data)
      .map(([, news]) => news)
      .find(news => news.id === id)
  }
  
}
