'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = '';

const imageAvatar = document.querySelector('.user__avatar');
imageAvatar.src= `${userAvatar || DEFAULT_AVATAR}`;
// o...
imageAvatar.src = (userAvatar ==="") ? DEFAULT_AVATAR : userAvatar;