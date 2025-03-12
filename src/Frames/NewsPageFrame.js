import Link from 'next/link';
import ImageHero from '@/Components/Hero/ImageHero';
import styles from './Styles/NewsPageFrame.module.css';
import formatDate from '@/lib/formatDate';

export default function NewsPageFrame({ data }) {
  return (
    <div className={styles.NewsPageFrame} style={{ marginTop: '64px' }}>
      <Link href="/news">
        <div className={styles.NewsPageFrame_BackButton}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Artboard</title>
            <g
              id="Artboard"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <polygon
                id="Path"
                fill="#FFFFFF"
                fillRule="nonzero"
                points="12 19.15 0 7.15 2.15 5 12 14.9 21.85 5.05 24 7.2"
              />
            </g>
          </svg>
        </div>
      </Link>
      <ImageHero
        src={data.hero.url}
        alt={`${data.title} - Power & Control Ltd`}
        height="75vh"
        title={data.title}
      />
      <div className={styles.NewsPageFrame_Container}>
        <div className={styles.NewsPageFrame_Container_Content}>
          {data.ytVideo && (
            <div className={styles.NewsPageFrame_Container_Content_Video}>
              <iframe
                src={data.ytVideo}
                title="Power and Control YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
          <div className={styles.NewsPageFrame_Container_Content_Text}>
            <p className={styles.NewsPageFrame_Container_Content_Text_Date}>
              {formatDate(data.date)}
            </p>
            <div
              className={styles.NewsPageFrame_Container_Content_Text_Html}
              dangerouslySetInnerHTML={{ __html: data.content.html }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
