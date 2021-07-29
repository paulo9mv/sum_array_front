import axios from "axios";

const URL = "http://127.0.0.1:5000/equilibrium";

interface GetApiPayload {
  arr: Array<number>;
}

interface GetApiResult {
  index: number;
}

const getApi = async (payload: GetApiPayload): Promise<GetApiResult> => {
  const { data } = (await axios.patch(URL, payload)) as any;

  return data;
};

export default getApi;
