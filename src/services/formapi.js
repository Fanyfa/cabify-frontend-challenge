export function sendFormData(data) {
  fetch('https://reqres.in/api/form', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
  });
}
