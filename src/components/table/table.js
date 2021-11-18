import './table.scss';

class Table {
  _tableContainer;
  _tableBody;

  constructor(tableContainer) {
    this._tableContainer = tableContainer;
    this._init();
  }

  fillTable(dataRating) {
    if (!this._tableBody) {
      this._tableBody = document.createElement('tbody');
      this._tableBody.classList.add('table__body');
      this._tableContainer.append(this._tableBody);
    }

    const friendIds = [];
    dataRating.friends.forEach(friend => {
      friendIds.push(friend.id);
    });

    const sortedUsersArray = dataRating.rating.sort(function(user1, user2){
      const user1Points = parseInt(user1.points, 10);
      const user2Points = parseInt(user2.points, 10);
      if (user2Points > user1Points) return 1;
      if (user2Points == user1Points) return 0;
      if (user2Points < user1Points) return -1;
    });

    let tableBodyContent = '';
    let numberPlace = 1;
    sortedUsersArray.forEach(player => {
      let tableUsernameModifier = 'table__username';
      if (friendIds.indexOf(player.id) !== -1) {
        tableUsernameModifier += ' table__username_friend';
      }

      let strNewRow = `<tr class="table__body-row">
                        <td class="table__body-cell table__body-cell_with-place">${numberPlace}</td>
                        <td class="table__body-cell table__body-cell_with-avatar">
                          <div class="table__avatar-wrapper"></div>
                        </td>
                        <td class="table__body-cell table__body-cell_with-name">
                          <div class="${tableUsernameModifier}" title="${player.name} ${player.lastName}">
                            ${player.name} ${player.lastName}
                          </div>
                        </td>
                        <td class="table__body-cell table__body-cell_with-experience">${player.points}</td>
                      </tr>`;
      tableBodyContent += strNewRow;
      numberPlace += 1;
    });

    this._tableBody.innerHTML = tableBodyContent;
  }

  _init() {
    this._tableBody = this._tableContainer.querySelector('.table__body');
  }
}

export default Table
