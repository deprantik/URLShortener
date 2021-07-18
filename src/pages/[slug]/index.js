import React from 'react';

const ShortUrlPage = (props) => {

  if (props.redirectData && props.redirectData.toUrl && typeof window !== undefined) {
    window.open(props.redirectData.toUrl);
  }
  if (!props.slug || props.error) {
    return <div>Wrong Url</div>
  }
  return <div>Redirecting...</div>
};

ShortUrlPage.getServerSideProps = async ({ query }) => {
  const slug = query.query;
  if (slug) {
    try {
      const res = await fetchStoryFormatArticles(storyFormat);
      const redirectData = await res.json();
      if (redirectData.status === 'SUCCESS') {
        return { redirectData: redirectData.data, slug };
      }
      return { error: true };
    } catch (err) {
      console.log("Fetch Failed");
      return { error: true };
    }
  }
  return { slug };
};

export default ShortUrlPage;