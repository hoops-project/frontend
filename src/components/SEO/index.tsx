import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string
  description: string
}

export const SEO = ({
  title,
  description = '농구에 의한 농구를 위한 농구경기약속 서비스 , HOOPS입니다.'
}: SEOProps) => (
  <Helmet>
    <title>hoops {title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="robots" content="index,nofollow" />
    <meta name="report" content="약속, 친구, 경기 일정" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:url" content="//hoops-front-end.vercel.app" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="src/assets/hoops-favicon.png" />
  </Helmet>
);