
export function Api(propsname, propscard, propsdesc, propsoption, propscheckbox, propstags) {

  const token = "a787b470d0bc4548f0c6e872d9b44d3ed76c6cf1603e54d9fde4fffd882488a7"
  const key = "4d328cada82fe26c62b0131c76892230";
  const createBoard = 'https://api.trello.com/1/boards/?key=' + key + '&token=' + token + '&name=' + propsname

  let getId = fetch(createBoard, {
    method: 'POST'
  })
    .then(response => response.json())
    .then(response => {
      const { id } = response
      return id;
    })

  getId.then(id => {
    const getList = 'https://api.trello.com/1/boards/' + id + '/lists?key=' + key + '&token=' + token

    propstags.map(function (tags) {
      const labelBord = 'https://api.trello.com/1/boards/' + id + '/labels?key=' + key + '&token=' + token + '&name=' + tags + '&color=black'


    fetch(labelBord, {
      method: 'POST'
    })
      .then(response => {
        console.log(
          `Response: ${response.status} ${response.statusText}`

        );
        return response.text();
      })
      .then(text => console.log(text))
      .catch(err => console.error(err));

    });
    
    //criar uma lista 
    let getIdList = fetch(getList, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => {
        const { id } = response[propscheckbox]
        return id;
      });


    getIdList.then(idList => {
      const createcard = 'https://api.trello.com/1/cards/?key=' + key + '&token=' + token + '&idList=' + idList + '&name=' + propscard + '&desc=' + propsdesc + '&pos=' + propsoption

      fetch(createcard, {
        method: 'POST'
      })
        .then(response => {
          console.log(
            `Response: ${response.status} ${response.statusText}`

          );
          return response.text();
        })
        .then(text => console.log(text))
        .catch(err => console.error(err));
    })
  })
}




