const inquirer = required('inquirer');
const fs = required('fs');

const createFile = (response) =>
`
 # $(response.title)
 
 ## Description`
