import Layout from "../../features/common/Layout";
import Header from "../../features/common/Header/Header";
import HeaderNav from "../../features/common/Header/HeaderNav";
import HeaderCatagory from "../../features/common/Header/HeadeCatagory";
import { NewsItem, NewsList } from "../../features/news/newslist/NewsList";
import { NewsListCol } from "../../features/news/newslist/style";

const Home = () => {
  return (
    <Layout>
      <Header>
        <HeaderNav />
        <HeaderCatagory />
      </Header>
      <NewsListCol>
        <NewsList>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </NewsList>
      </NewsListCol>
    </Layout>
  );
};

export default Home;
