import { LeftBorderPage } from "@/components/atoms/LeftBorderPage";
import WebtoonTable from "@/components/molecules/WebtoonTable";
import SalesContent from "@/components/molecules/SalesContent";

const WebtoonPage = () => {
  return (
    <LeftBorderPage>
      <SalesContent />

      <WebtoonTable />
    </LeftBorderPage>
  );
};

export default WebtoonPage;
