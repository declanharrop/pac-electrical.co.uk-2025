import fs from 'fs';
import path from 'path';
import { MarkdownViewer } from '@/Components/MarkdownViewer'; // Import the viewer we created earlier

export default async function PrivacyPolicyPage() {
  // 1. Construct the path to your file.
  // process.cwd() points to the root of your project.
  const filePath = path.join(
    process.cwd(),
    'src/app/information/privacy-policy/privacy-policy.md',
  );

  let content = '';

  try {
    // 2. Read the file synchronously
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error('Error reading privacy policy:', error);
    return <div>Could not load privacy policy.</div>;
  }

  // 3. Pass the raw string content to your viewer
  return (
    <main>
      <MarkdownViewer source={content} />
    </main>
  );
}
