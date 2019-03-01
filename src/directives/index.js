import angular from "angular";

import stretch from "./stretch.directive";

// our common module
const DirectivesModule = angular
  .module("app-directives", [])
  .directive("stretch", stretch).name;

export default DirectivesModule;
