import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../graphql/queries/queries";
import Loading from "./ui/Loading";
import EpisodeDetails from "./EpisodeDetails";
import { Col, Result, Row } from "antd";
import { Episode } from "../graphql/__generated__/graphql";

const Episodes = () => {
  const { data, loading, error } = useQuery(GET_EPISODES);
  console.log(data);

  const episodes = data?.episodes?.results as Episode[] | null;
  let content = null;

  if (loading) content = <Loading />;

  if (!loading && error)
    content = <Result status="error" title={error.message} />;

  if (!loading && !error && episodes?.length === 0)
    content = <Result status="warning" title="No episode found!" />;

  if (!loading && !error && episodes?.length && episodes?.length > 0) {
    content = episodes?.map((episode: Episode | null) => (
      <Col span={6}>
        <EpisodeDetails key={episode?.id} episode={episode} />
      </Col>
    ));
  }

  return (
    <div className="px-6 sm:px-16">
      <h1 className="font-poppins text-center py-6 sm:py-10">All Episodes</h1>
      <Row justify={'center'} align={'middle'} gutter={[16, 16]}>
        {content}
      </Row>
    </div>
  );
};
export default Episodes;
