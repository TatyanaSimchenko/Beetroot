// 
import HttpService from './httpService';

const httpService = new HttpService();

const fetchData = async function() {
  const { getExam, getInfo, getStudent, getStudents } = httpService;
  
  const students = await getStudents();
  const student = await getStudent(1);
  const exam = await getExam();
  const info = await getInfo();
  
  console.log(exam);
  console.log(student);
  console.log(students);
  console.log(info);
};

fetchData()