import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/CodeBlock';
import Layout from '../../layout/Layout';

const markdownText = `
# タイトル
Paragraph～～～～
- 項目１
- 項目２
- 項目３
~~~js
console.log('It works!')
~~~
`;

const Test = () => {
  return (
    <ReactMarkdown
      components={{
        code: CodeBlock,
      }}
    >
      {markdownText}
    </ReactMarkdown>
  );
};

Test.getLayout = (page) => <Layout>{page}</Layout>;

export default Test;
