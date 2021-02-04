import axios from 'axios'
  
const token ='a787b470d0bc4548f0c6e872d9b44d3ed76c6cf1603e54d9fde4fffd882488a7';
const key = '4d328cada82fe26c62b0131c76892230';

var createBoard = 'https://api.trello.com/1/boards/?'



axios.post(createBoard, {
  name: "mateus",
    key : key,
    token : token

  })
  .then(function (response) {
    console.log(response);
    })
  .catch(function (error) {
    console.log(error);
  });

export default axios.post                                                                                                                                                  
