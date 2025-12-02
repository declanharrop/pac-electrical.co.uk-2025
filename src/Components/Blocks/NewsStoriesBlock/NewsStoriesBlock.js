import { groq } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { blogClient } from '@/sanity/client';
import Styles from './NewsStoriesBlock.module.css';

const NEWS_QUERY = groq`*[_type == "post"] | order(date desc) {
  title,
  subtitle,
  "slug": slug.current,
  date,
  "imageUrl": heroImage.asset->url,
  "imageAlt": heroImage.alt,
  author->{
    name,
    jobTitle,
    "avatarUrl": profilePhoto.asset->url
  }
}`;

// HYDRATION SAFE DATE FORMATTER
const formatDate = (dateString) => {
  if (!dateString) return '';
  const d = new Date(dateString);
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

export default async function NewsStoriesBlock() {
  const data = await blogClient.fetch(NEWS_QUERY);

  if (!data || data.length === 0) return null;

  const featuredArticle = data[0];
  const lowerArticles = data.slice(1, 4);

  // VISUAL BADGE (No internal links because the parent Card is a link)
  const AuthorBadge = ({ author }) => {
    if (!author) return null;
    return (
      <div className={Styles.authorContainer}>
        {author.avatarUrl && (
          <div className={Styles.avatarWrapper}>
            <Image
              src={author.avatarUrl}
              alt={author.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
        <div className={Styles.authorInfo}>
          <span className={Styles.authorName}>{author.name}</span>
          <span className={Styles.authorRole}>{author.jobTitle}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={Styles.NewsStoriesBlock}>
      <div className={Styles.NewsStoriesBlock_Container}>
        <h2>Latest News</h2>

        <div className={Styles.NewsStoriesBlock_Container_Upper}>
          {/* FEATURED STORY */}
          {featuredArticle && (
            <Link
              href={`/news/${featuredArticle.slug}`} // FIXED: Internal Link
            >
              <div className={Styles.NewsStoriesBlock_Container_Upper_Story}>
                <div
                  className={
                    Styles.NewsStoriesBlock_Container_Upper_Story_Image_Container
                  }
                >
                  {featuredArticle.imageUrl && (
                    <Image
                      style={{ objectFit: 'cover' }}
                      className={
                        Styles.NewsStoriesBlock_Container_Upper_Story_Image
                      }
                      src={featuredArticle.imageUrl}
                      alt={featuredArticle.imageAlt || featuredArticle.title}
                      fill
                    />
                  )}
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
                      {formatDate(featuredArticle.date)}
                    </p>
                    <p>{featuredArticle.subtitle}</p>

                    <AuthorBadge author={featuredArticle.author} />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* LOWER STORIES LIST */}
          <div className={Styles.NewsStoriesBlock_Container_Lower}>
            {lowerArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`} // FIXED: Internal Link
              >
                <div className={Styles.NewsStoriesBlock_Container_Lower_Story}>
                  <div
                    className={
                      Styles.NewsStoriesBlock_Container_Lower_Story_Image_Container
                    }
                  >
                    {article.imageUrl && (
                      <Image
                        style={{ objectFit: 'cover' }}
                        className={
                          Styles.NewsStoriesBlock_Container_Lower_Story_Image
                        }
                        src={article.imageUrl}
                        alt={article.imageAlt || article.title}
                        fill
                      />
                    )}
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
                      {formatDate(article.date)}
                    </p>
                    <p style={{ marginBottom: '15px' }}>{article.subtitle}</p>

                    <AuthorBadge author={article.author} />
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
