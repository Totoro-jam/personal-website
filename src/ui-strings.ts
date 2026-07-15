export interface UIStrings {
  nav: {
    home: string;
    posts: string;
    notes: string;
    sparks: string;
    projects: string;
    search: string;
  };
  post: {
    publishedAt: string;
    updatedAt: string;
    sharePostIntro: string;
    sharePostOn: string;
    sharePostViaEmail: string;
    tagLabel: string;
    backToTop: string;
    goBack: string;
    editPage: string;
    previousPost: string;
    nextPost: string;
  };
  pagination: {
    prev: string;
    next: string;
    page: string;
  };
  home: {
    socialLinks: string;
    featured: string;
    recentPosts: string;
    allPosts: string;
  };
  footer: {
    copyright: string;
    allRightsReserved: string;
  };
  pages: {
    postsTitle: string;
    postsDesc: string;

    notesTitle: string;
    notesDesc: string;

    sparksTitle: string;
    sparksDesc: string;

    projectsTitle: string;
    projectsDesc: string;

    searchTitle: string;
    searchDesc: string;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    searchPlaceholder: string;
    noResults: string;
    goToPreviousPage: string;
    goToNextPage: string;
  };
  notFound: {
    title: string;
    message: string;
    goHome: string;
  };
}

/** Replace `{{key}}` placeholders in UI strings. */
export function tplStr(
  template: string,
  vars: Record<string, string | number>
): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    const value = vars[key];
    return value !== undefined && value !== null ? String(value) : "";
  });
}

/** Single-language (Chinese) UI strings. */
export const ui: UIStrings = {
  nav: {
    home: "Home",
    posts: "Blog",
    notes: "Notes",
    sparks: "Sparks",
    projects: "Projects",
    search: "Search",
  },
  post: {
    publishedAt: "发布于",
    updatedAt: "更新于",
    sharePostIntro: "分享这篇文章：",
    sharePostOn: "在 {{platform}} 上分享",
    sharePostViaEmail: "通过邮件分享",
    tagLabel: "标签",
    backToTop: "回到顶部",
    goBack: "返回",
    editPage: "编辑此页",
    previousPost: "上一篇",
    nextPost: "下一篇",
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: "第",
  },
  home: {
    socialLinks: "社交链接",
    featured: "精选",
    recentPosts: "最新文章",
    allPosts: "全部文章",
  },
  footer: {
    copyright: "版权",
    allRightsReserved: "保留所有权利。",
  },
  pages: {
    postsTitle: "Blog",
    postsDesc: "技术深度文章和长文记录。",

    notesTitle: "Notes",
    notesDesc: "学习笔记、参考资料、知识碎片。",

    sparksTitle: "Sparks",
    sparksDesc: "灵感碎片、奇思妙想、头脑风暴。",

    projectsTitle: "Projects",
    projectsDesc: "我打造的项目。",

    searchTitle: "Search",
    searchDesc: "搜索文章...",
  },
  a11y: {
    skipToContent: "跳至内容",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleTheme: "切换主题",
    searchPlaceholder: "搜索文章...",
    noResults: "未找到结果",
    goToPreviousPage: "上一页",
    goToNextPage: "下一页",
  },
  notFound: {
    title: "404 未找到",
    message: "页面未找到",
    goHome: "返回首页",
  },
};
