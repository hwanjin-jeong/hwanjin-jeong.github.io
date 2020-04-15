import React from 'react';

interface PostTemplateProps {
  pageContext: {
    title: string,
    html: string
  }
}

const PostTemplate = (props: PostTemplateProps) => {
  const { title, html } = props.pageContext;
  return (
    <code>
      <pre>
        <h2>{title}</h2>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </code>
  )
}


PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
