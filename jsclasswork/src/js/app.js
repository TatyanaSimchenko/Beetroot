import HttpService from './httpService';
import loader from './loader';
import { render, compileStudents } from './dom';

const httpService = new HttpService();

const fetchData = async function () {
  const { getExam, getInfo, getStudent, getStudents } = httpService;

  loader.show();
  const students = await getStudents();
  // const student = await getStudent(1);
  const exams = await getExam();
  loader.hide();

  const mapedStudents = students.map((student) => {
    const exam = exams.find((item) => item?.id === 1);
    const studentExam = (exam?.repos || []).find(
      (item) => item?.studentId === student?.id
    );
    return { ...student, examRepo: studentExam?.repo };
  });

  const template = compileStudents(mapedStudents);
  render('students', template);
};

fetchData();