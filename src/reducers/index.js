import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { userReducer } from './user';
import { userlistReducer } from './userlist';
import { teamReducer } from './team';
import { galleryReducer } from './gallery';
import { serviceReducer } from './service';
import { imagesListReduser } from './imglist';
import { partnerimagesListReduser } from './partner';
import { workReducer } from './work';


export default combineReducers({
    router: routerReducer,
    userinfo: userReducer,
    userlist: userlistReducer,
    team: teamReducer,
    images: imagesListReduser,
    gallerys: galleryReducer,
    service: serviceReducer,
    work: workReducer,
    partner: partnerimagesListReduser,
});