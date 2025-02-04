var xhr = new XMLHttpRequest();

var url = "./news_article.json";

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function() {
var newsArticles = xhr.response.newsArticles;
var newsArticlesDiv = document.getElementById('news_articles');

newsArticles.forEach(function(article){
    var newsArticleDiv = document.createElement('div');
    newsArticleDiv.classList.add('newsArticles');

    var title = document.createElement('p');
    title.textContent = newsArticles.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    var breakingNews = document.createElement('p');
    breakingNews.textContent = article.breakingNews;

    });

}
