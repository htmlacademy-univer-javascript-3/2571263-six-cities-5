function isAbsoluteUrl(url: string) {
  return new RegExp('(^|:)//').test(url);
}

const withoutTrailingSlash = (url: string) => url.replace(/\/$/, '');
const withoutLeadingSlash = (url: string) => url.replace(/^\//, '');

export function joinUrls(
  base: string | undefined,
  url: string | undefined
): string {
  if (!base) {
    return url!;
  }
  if (!url) {
    return base;
  }

  if (isAbsoluteUrl(url)) {
    return url;
  }

  const delimiter = base.endsWith('/') || !url.startsWith('?') ? '/' : '';
  base = withoutTrailingSlash(base);
  url = withoutLeadingSlash(url);

  return `${base}${delimiter}${url}`;
}

export default function JoinUrls(...urls: string[]): string {
  return urls ? urls.reduce((acc, cur) => joinUrls(acc, cur), '') : '';
}
