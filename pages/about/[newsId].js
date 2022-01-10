import { useRouter } from "next/router";

const NewsDetailPage = ({ id }) => {
  const router = useRouter();
  console.log(router.query);
  return <h1>The News Detail Page</h1>;
};

export default NewsDetailPage;
