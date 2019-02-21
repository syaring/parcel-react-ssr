import { JsonNewsRepo } from "./JsonNewsRepo";
import { BaseNewsType } from "../../../types/News";
import { BaseNewsRepo } from "./BaseNewsRepo";

const news1: BaseNewsType = {
  title: "solidware!",
  mediaCompany: "edaily",
  date: new Date('2019-02-18'),
  link: 'www.naver.com'
}

export function testNewsRepo(newsRepo: BaseNewsRepo) {
  test('NewsRepo', async () => {
    const news1Id = await newsRepo.addNews(news1)
    const news1Fetched = await newsRepo.getNewsById(news1Id)
  
    expect(news1Fetched).toEqual({
      ...news1,
      id: news1Id,
    })
  })
}

testNewsRepo(new JsonNewsRepo())
