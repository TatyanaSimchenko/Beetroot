export const render = (id, data) => {
  document.getElementById(id).innerHTML = data;
};

export const compileStudents = (students) => {
  const template = students.reduce((sum, { name, avatar, repo, github, examRepo = '' }) => {
    return `${sum}
<li class="student-card">
  <div class="avatar student-card__avatar">
    <img class="avatar__image" src="${avatar}" alt="${name}">
  </div>
  <div class="student-card__content">
    <h3 class="student-card__name">${name}</h3>
    <a class="link student-card__link" target="_blank" href="${repo}">Homeworks</a>
    ${examRepo && `<a class="link student-card__link" target="_blank" href="${examRepo}">First Exam</a>`}
    <a class="link student-card__link" target="_blank" href="${github}">Github</a>
  </div>
</li>`;
  }, '');
  return template;
};