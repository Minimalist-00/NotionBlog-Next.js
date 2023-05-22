/* タグの有無によってリンクを変える */
export const getPageLink = (tag: string, page: number) => {
  return tag ? `/posts/tag/${tag}/page/${page}` : `/posts/page/${page}`;
};
