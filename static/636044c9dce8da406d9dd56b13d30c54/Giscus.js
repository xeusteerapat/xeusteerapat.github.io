import React from 'react';
import Giscus from '@giscus/react';

const GiscusComment = () => {
  return (
    <>
      <Giscus
        repo="xeusteerapat/xeusteerapat.github.io"
        repoId="MDEwOlJlcG9zaXRvcnkyMTkyNTY4NzY="
        category="General"
        categoryId="DIC_kwDODRGYLM4COf8-"
        mapping="title"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="light"
        lang="en"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default GiscusComment;
