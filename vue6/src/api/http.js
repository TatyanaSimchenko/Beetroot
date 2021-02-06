export const API_URL = "https://swapi.dev/api";

const apiEndpoints = {
  people: `/people/`,
  planets: `/planets/`,
  starships: `/starships/`,
};

export class API {
  async _request(url) {
    try {
      const res = await fetch(`${API_URL}${url}`);
      if (res.ok) {
        return res.json();
      }
      return null;
    } catch {
      console.log(`Something wrong => [${url}]`);
      return null;
    }
  }

  getPeople = async (page = 1, prevData = []) => {
    const response = await this._request(`${apiEndpoints.people}?page=${page}`);
    const data = (response.results || []).map((item) => {
      const id = item.url.split(apiEndpoints.people)[1].slice(0, -1);
      return { ...item, id };
    });
    if (response?.next) {
      return this.getPeople(page + 1, [...prevData, ...data]);
    }
    return [...prevData, ...data];
  };
  getPerson = async (id) => {
    const data = await this._request(`${apiEndpoints.people}${id}`);
    return { ...data, id };
  };
  getPlanets = (id = "") => this._request(`${apiEndpoints.planets}${id}`);
  getStarships = (id = "") => this._request(`${apiEndpoints.starships}${id}`);
}
