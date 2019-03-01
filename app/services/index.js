import angular from 'angular';
import notifyService from './notify.service';

// our services module
const ServicesModule = angular
  .module('app-services', [])
  .factory('notifyService', notifyService).name;

export default ServicesModule;
