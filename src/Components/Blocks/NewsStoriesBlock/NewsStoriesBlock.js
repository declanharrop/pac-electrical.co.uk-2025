'use client';

import Image from 'next/image';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Styles from './NewsStoriesBlock.module.css';
import { LATEST_NEWS_QUERY } from '@/lib/DataQueries';

export default function NewsStoriesBlock() {
  const { data } = useQuery(LATEST_NEWS_QUERY);

  if (data) {
    const featured = data.articles.slice(0, 1);
    const featuredArticle = featured[0];
    const lowerArticles = data.articles.slice(1, 4);

    return (
      <div className={Styles.NewsStoriesBlock}>
        <div className={Styles.NewsStoriesBlock_Container}>
          <h2>Latest News</h2>
          <div className={Styles.NewsStoriesBlock_Container_Upper}>
            <Link href={`/news/${featuredArticle.slug}`}>
              <div className={Styles.NewsStoriesBlock_Container_Upper_Story}>
                <div
                  className={
                    Styles.NewsStoriesBlock_Container_Upper_Story_Image_Container
                  }
                >
                  <Image
                    style={{ objectFit: 'cover' }}
                    className={
                      Styles.NewsStoriesBlock_Container_Upper_Story_Image
                    }
                    src={featuredArticle.hero.url}
                    alt={featuredArticle.title}
                    fill
                  />
                </div>
                <div
                  className={
                    Styles.NewsStoriesBlock_Container_Upper_Story_Content
                  }
                >
                  <h4
                    className={
                      Styles.NewsStoriesBlock_Container_Upper_Item_Title
                    }
                  >
                    {featuredArticle.title}
                  </h4>
                  <div
                    className={
                      Styles.NewsStoriesBlock_Container_Upper_Item_Text
                    }
                  >
                    <p
                      style={{
                        color: 'var(--green)',
                        fontStyle: 'italic',
                        fontWeight: '600',
                        marginBottom: '5px',
                      }}
                    >
                      {featuredArticle.date}
                    </p>
                    <p>{featuredArticle.preview}</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className={Styles.NewsStoriesBlock_Container_Lower}>
              {lowerArticles.map((article) => (
                <Link key={article.id} href={`/news/${article.slug}`}>
                  <div
                    className={Styles.NewsStoriesBlock_Container_Lower_Story}
                  >
                    <div
                      className={
                        Styles.NewsStoriesBlock_Container_Lower_Story_Image_Container
                      }
                    >
                      <Image
                        style={{ objectFit: 'cover' }}
                        className={
                          Styles.NewsStoriesBlock_Container_Lower_Story_Image
                        }
                        src={article.hero.url}
                        alt={article.title}
                        fill
                      />
                    </div>
                    <div
                      className={
                        Styles.NewsStoriesBlock_Container_Lower_Story_Content
                      }
                    >
                      <h4
                        className={
                          Styles.NewsStoriesBlock_Container_Lower_Story_Content_Title
                        }
                      >
                        {article.title}
                      </h4>
                      <div className="dark-divider" />
                      <p
                        style={{
                          color: 'var(--green)',
                          fontStyle: 'italic',
                          fontWeight: '600',
                          marginTop: '10px',
                          marginBottom: '5px',
                        }}
                      >
                        {article.date}
                      </p>
                      <p>{article.preview}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
