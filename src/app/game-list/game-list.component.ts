import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  itemGameArray = [
    {
      'id':'1',
      'nom':'Paladins',
      'type':'Fps',
      'note': '7/10',
      'logo': 'https://external-preview.redd.it/w-lYA5SggXV4qk_HaVn5Tb8bW0nL5YZd_LsZIbp-oRc.jpg?auto=webp&s=dcc3fb306d18b1a611564c2c110eeabb6d8c4073',
      'image':'https://nofrag.com/wp-content/uploads/2016/10/OB34_Blog_PressRelease.jpg',
      'editeur':'Hi-Rez',
      'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      'id': '2',
      'nom': 'Overwatch',
      'type': 'Fps',
      'note': '9/10',
      'logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/600px-Overwatch_circle_logo.svg.png',
      'image': 'https://i.ytimg.com/vi/pyS3vmnWTyU/maxresdefault.jpg',
      'editeur': 'Blizzard',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      'id': '3',
      'nom': 'COD : Modern Warfare',
      'type': 'Fps',
      'note': '9.5/10',
      'logo': 'https://res.cloudinary.com/teepublic/image/private/s--Jg773cFn--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:35/co_000000,e_outline:inner_fill:35/co_ffffff,e_outline:35/co_ffffff,e_outline:inner_fill:35/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1571657981/production/designs/6409795_0.jpg',
      'image': 'https://static1.millenium.org/articles/7/34/87/77/@/1182393-call-of-duty-modern-warfare-2019-article_m-1.png',
      'editeur': 'Activision',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  constructor() { }

  // truncate(description)

  ngOnInit() {
  }

}
