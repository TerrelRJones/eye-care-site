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
  let date = new Date(dateValue.replace(/,.*$/, ""));
  let [time, period] = timeValue.split(" ");
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

export const sortArticlesByDateTime = async (
  date: SortBy,
  time: SortBy,
  arr: []
) => {
  const res = await arr;
  const sorted = res.sort((a, b) =>
    convertDate(a[date], a[time]).toDateString() <
    convertDate(b[date], b[time]).toDateString()
      ? 1
      : convertDate(a[date], a[time]).toDateString() >
        convertDate(b[date], b[time]).toDateString()
      ? -1
      : 0
  );
  return sorted;
};
