import axios from "axios";

const URL = "https://sumarray.herokuapp.com/equilibrium";

interface GetApiPayload {
  arr: Array<number>;
}

interface GetApiResult {
  index: number;
}

const getApi = async (payload: GetApiPayload): Promise<GetApiResult> => {
  const { data } = (await axios.post(URL, payload)) as any;

  return data;
};

export default getApi;
