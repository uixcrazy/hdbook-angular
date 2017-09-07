import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mybook',
  templateUrl: 'mybook.component.html',
  styleUrls: [ 'mybook.component.scss' ]
})


// https://stackoverflow.com/questions/43846831/ng2-smart-table-this-source-add-and-this-source-edit-refreshes-the-page

// https://plnkr.co/edit/1YMlIOVJkq1Cj7cJSjIZ?p=preview


export class MybookComponent {
  constructor() { }
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Full Name',
        filter: false
      },
      username: {
        title: 'User Name',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      }
    },
    actions: {
      columnTitle: 'hành động',
      position: 'right',
    },
    delete: {
      deleteButtonContent: 'xóa',
      // confirmDelete: true
    },
    mode: 'external'

    // button: {
    //   title: 'Button',
    //   type: 'custom',
    //   renderComponent: ButtonViewComponent,
    //   onComponentInitFunction(instance) {
    //     instance.save.subscribe(row => {
    //       alert(`${row.name} saved!`)
    //     });
    //   }
    // },

  };


  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];


  editConfirm($event) {
    console.log($event);
  }

  createConfirm($event) {
    console.log($event);
  }

  onCreateConfirm(event):void {
    console.log(event);
  }

  onSaveConfirm(event):void {
    console.log(event);
  }

  onDeleteConfirm(event): void {
    console.log(event);
  }

  onCreate($event) {
    console.log($event);
  }

  onDelete($event): void {
    console.log('dele', $event);
  }
}
