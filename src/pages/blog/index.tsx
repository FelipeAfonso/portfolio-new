import { useFetchPostById } from "../../api/useFetchPostById";

export default () => {
  const { data } = useFetchPostById("ckadrcx4g00pw01525c5d2e56");
  return <p>{JSON.stringify(data)}</p>;
};
