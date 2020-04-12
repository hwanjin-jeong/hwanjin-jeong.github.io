import React from 'react';

interface PostTemplateProps {
  data: {
    markdownRemark: Post
  }
}

const PostTemplate = (props: PostTemplateProps) => (
  <code>
    <pre>
      {JSON.stringify(props, null, 4)}
    </pre>
  </code>
)


PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
