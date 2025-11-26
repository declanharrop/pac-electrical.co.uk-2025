/* eslint-disable jsx-a11y/heading-has-content */
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from './MarkdownStyles.module.css';

// Map HTML tags to components with CSS Module classes
const components = {
  h1: (props) => <h1 className={styles.heading1} {...props} />,
  h2: (props) => <h2 className={styles.heading2} {...props} />,
  p: (props) => <p className={styles.paragraph} {...props} />,
  a: (props) => <a className={styles.link} {...props} />,
  ul: (props) => <ul className={styles.unorderedList} {...props} />,
  ol: (props) => <ol className={styles.orderedList} {...props} />,
  code: (props) => <code className={styles.codeBlock} {...props} />,
};

export function MarkdownViewer({ source }) {
  return (
    <div className={styles.container}>
      {/* Render the markdown using the custom component map */}
      <MDXRemote source={source} components={components} />
    </div>
  );
}
