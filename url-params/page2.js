const Params = window.location.search;

const UrlParam = new URLSearchParams(Params);

const articleId =UrlParam.get("fullname");
const articleIds=UrlParam.get('age')
console.log(articleId+' ',articleIds)