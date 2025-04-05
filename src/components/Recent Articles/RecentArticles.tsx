import React from "react";
import "./recentArticles.css";
import {
  RecentArticlesSubtitle,
  RecentArticlesHeading,
  RecentArticlesDescription,
} from "../Branding";

export interface Article {
  image: string;
  categories: string;
  title: string;
  date: string;
  description: string;
  link: string;
}

export interface RecentArticlesProps {
  subtitle: string;
  heading: string;
  description: string;
  articles: Article[];
}

const RecentArticles: React.FC<RecentArticlesProps> = ({
  subtitle,
  heading,
  description,
  articles,
}) => {
  return (
    <section className="recent-articles_section">
      <div className="container">
        <div className="recent-articles_wrapper">
          <RecentArticlesSubtitle subtitle={subtitle} />
          <RecentArticlesHeading heading={heading} />
          <RecentArticlesDescription description={description} />
        </div>

        {/* blogs */}
        <div className="recent-articles_main">
          {articles.map((article, index) => (
            <div key={index} className="recent-articles_container">
              <div className="recent-articles_img_container">
                <img
                  src={article.image}
                  width={350}
                  height={231}
                  alt={article.title}
                />
              </div>
              <div className="recent-articles_content">
                <span>{article.categories}</span>
                <h3>{article.title}</h3>
                <span className="date">{article.date}</span>
                <p>{article.description}</p>
                <a href={article.link}>Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
