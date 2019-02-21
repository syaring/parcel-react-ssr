export type BaseNewsType = {
  title: string
  date: Date
  mediaCompany: string
  link: string
}

export type NewsIDType = string & {
  __NEWS_ID_TYPE: null;
}

export type NewsType = {
  id: NewsIDType
} & BaseNewsType
