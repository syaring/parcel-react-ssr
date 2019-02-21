/// <reference path="../node_modules/@types/wu/index.d.ts" />

declare namespace wu {
  interface WuIterable<T> extends IterableIterator<T> {
    toArray(): T[]
  }
}
