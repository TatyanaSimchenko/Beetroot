const API_URL = 'https://beetroot-api.herokuapp.com';

const url = {
  info: `${API_URL}/info/`,
  students: `${API_URL}/students/`,
  student: (id) => `${API_URL}/students/${id}/`,
  exam: `${API_URL}/exam/`,
};

class HttpService {
  async _get(path) {
    try {
      const res = await fetch(path);
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return null;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  getInfo = async () => {
    return this._get(url.info);
  };
  getStudents = async () => {
    return this._get(url.students);
  };
  getStudent = async (id) => {
    return this._get(url.student(id));
  };
  getExam = async () => {
    return this._get(url.exam);
  };
}

export default HttpService;