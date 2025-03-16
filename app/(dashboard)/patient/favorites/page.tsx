import RequestPageView from "./page-view";

interface FavoritesPageProps {
  params: {
    lang: any;
  };
}
const FavoritesPage = async ({ params: { lang } }: FavoritesPageProps) => {
  return <RequestPageView   />;
};

export default FavoritesPage;
