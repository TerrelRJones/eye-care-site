import { Article } from "components/ArticleList/ArticleList";

export enum Category {
  TECHNOLOGY = "technology",
}

export enum SortBy {
  AUTHOR = "author",
  CONTENT = "content",
  DATE = "date",
  ID = "id",
  TITLE = "title",
  URL = "url",
  TIME = "time",
}

export const getArticles = async (category: Category) => {
  try {
    const data = await fetch(
      `https://inshortsapi.vercel.app/news?category=${category}`
    );

    const res = await data.json();

    return res.data;
  } catch (e: any) {
    return e.message;
  }
};

export const printArticles = async (articles: Promise<string>) => {
  try {
    const data = await articles;

    if (data.length === 0) return [];

    return data;
  } catch (e: any) {
    return e.message;
  }
};

export function convertDate(dateValue: any, timeValue: any) {
  const date = new Date(dateValue.replace(/,.*$/, ""));
  const [time, period] = timeValue.split(" ");
  let [hour, min] = time.split(":");
  hour = period === "pm" ? parseInt(hour) + 12 : parseInt(hour);
  date.setHours(hour, parseInt(min));
  return date;
}

export const sortArticlesBy = async (sortType: SortBy, arr: []) => {
  const res = await arr;

  const sorted = res.sort((a, b) =>
    a[sortType] > b[sortType] ? 1 : a[sortType] < b[sortType] ? -1 : 0
  );
  return sorted;
};

export const sortArticlesByDateTime = (articles: Article[]) => {
  const sorted = articles.sort((a, b) =>
    convertDate(a[SortBy.DATE], a[SortBy.TIME]).toDateString() >
    convertDate(b[SortBy.DATE], b[SortBy.TIME]).toDateString()
      ? 1
      : convertDate(a[SortBy.DATE], a[SortBy.TIME]).toDateString() <
        convertDate(b[SortBy.DATE], b[SortBy.TIME]).toDateString()
      ? -1
      : 0
  );
  return sorted;
};
