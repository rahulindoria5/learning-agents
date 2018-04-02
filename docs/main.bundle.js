webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "/* app-about {\n  margin: 5px;\n  padding: 5px;\n}\n */\n\nli{\n    margin-top: 10px;\n}\n\nli:first-child {\n    margin-top:0;\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"second-toolbar\">\n  <mat-toolbar-row></mat-toolbar-row>\n  <mat-toolbar-row>\n    <h1>About</h1>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-card id=\"about-panel\">\n  <mat-card-header>\n    <mat-card-title>About</mat-card-title>\n  </mat-card-header>\n  <mat-card-content id=\"about-content\">\n    <p>\n      The content of this website is for educational purposes only.\n      It is inspired by the Stanford <a href=\"http://cs.stanford.edu/people/karpathy/reinforcejs/waterworld.html\">\"Waterworld\"</a> example of Andrej Karpathy, which as well is MIT licensed.\n    </p>\n    <p>\n      This project shows the simulation environment, the gained pre-trained agents, an explanation of the whole simulation and project construction, hyperparameters and the presentation of the simulation results.\n      It is also shown how the DQN-Method is working in principle.\n      For seeing the source code of all dependent project modules please see the following section \"Dependencies\".\n    </p>\n  </mat-card-content>\n</mat-card>\n<mat-card id=\"license-panel\">\n  <mat-card-header>\n    <mat-card-title>Dependencies</mat-card-title>\n  </mat-card-header>\n  <mat-card-content id=\"about-content\">\n    <ol style=\"line-height: 1.15;\">\n      <li>\n        <a href=\"https://github.com/mvrahden/learning-agents\"><b>Learning Agents</b></a>\n              &ndash; Implementation of the Simulation Control and Frontend\n      </li>\n      <li>\n        <a href=\"https://github.com/mvrahden/learning-agents-model\"><b>Learning Agents Model</b></a>\n              &ndash; Implementation of World Objects\n      </li>\n      <li>\n        <a href=\"https://github.com/mvrahden/reinforce-js\"><b>reinforce-js</b></a>\n              &ndash; Implementation of Deep-Q-Solver\n      </li>\n      <li>\n        <a href=\"https://github.com/mvrahden/recurrent-js\"><b>recurrent-js</b></a>\n              &ndash; Implementation of Graph Model, Matrix-Operations and Neural Network Structure\n      </li>\n      <li>\n        <a href=\"https://angular.io/\"><b>Angular</b></a>\n              &ndash; Mobile &amp; Desktop Frontend Framework\n      </li>\n      <li>\n        <a href=\"https://material.angular.io/\"><b>Angular Material</b></a>\n              &ndash; Material Design Components for the Angular Frontend Framework\n      </li>\n    </ol>\n  </mat-card-content>\n</mat-card>\n<mat-card id=\"license-panel\">\n  <mat-card-header>\n    <mat-card-title>License</mat-card-title>\n  </mat-card-header>\n  <mat-card-content id=\"about-content\" style=\"text-align:justify\">\n    <p>\n      The MIT License Copyright (c) 2017 Menno van Rahden\n    </p>\n    <p>\n      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation\n      files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy,\n      modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software\n      is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be\n      included in all copies or substantial portions of the Software.\n    </p>\n    <p>\n      THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n      OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS\n      BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT\n      OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n    </p>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AboutComponent = class AboutComponent {
};
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("./src/app/about/about.component.html"),
        styles: [__webpack_require__("./src/app/about/about.component.css")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pretrained_pretrained_component__ = __webpack_require__("./src/app/pretrained/pretrained.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simulation_simulation_component__ = __webpack_require__("./src/app/simulation/simulation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__explanation_explanation_component__ = __webpack_require__("./src/app/explanation/explanation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dqn_method_dqn_method_component__ = __webpack_require__("./src/app/dqn-method/dqn-method.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const routes = [
    { path: '', redirectTo: '/#', pathMatch: 'full' },
    { path: 'pretrained', redirectTo: '/#', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__pretrained_pretrained_component__["a" /* PretrainedComponent */] },
    { path: 'simulation', component: __WEBPACK_IMPORTED_MODULE_4__simulation_simulation_component__["a" /* SimulationComponent */] },
    { path: 'explanation', component: __WEBPACK_IMPORTED_MODULE_5__explanation_explanation_component__["a" /* ExplanationComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'dqn-method', component: __WEBPACK_IMPORTED_MODULE_6__dqn_method_dqn_method_component__["a" /* DQNComponent */] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_grid_list__ = __webpack_require__("./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_button_toggle__ = __webpack_require__("./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navigation_navigation_component__ = __webpack_require__("./src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pretrained_pretrained_component__ = __webpack_require__("./src/app/pretrained/pretrained.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__simulation_simulation_component__ = __webpack_require__("./src/app/simulation/simulation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__explanation_explanation_component__ = __webpack_require__("./src/app/explanation/explanation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dqn_method_dqn_method_component__ = __webpack_require__("./src/app/dqn-method/dqn-method.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_grid_list__["a" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material_expansion__["a" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material_tooltip__["a" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pretrained_pretrained_component__["a" /* PretrainedComponent */],
            __WEBPACK_IMPORTED_MODULE_14__simulation_simulation_component__["a" /* SimulationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__explanation_explanation_component__["a" /* ExplanationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__dqn_method_dqn_method_component__["a" /* DQNComponent */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__navigation_navigation_component__["a" /* NavigationComponent */]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dqn-method/dqn-method.component.css":
/***/ (function(module, exports) {

module.exports = "/* app-about {\n  margin: 5px;\n  padding: 5px;\n}\n */\n\nli{\n    margin-top: 10px;\n}\n\nli:first-child {\n    margin-top:0;\n}"

/***/ }),

/***/ "./src/app/dqn-method/dqn-method.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"second-toolbar\">\n  <mat-toolbar-row></mat-toolbar-row>\n  <mat-toolbar-row>\n    <h1>DQN-Method</h1>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>DQN-Method</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      The <code>DQNSolver</code> allows to take actions in an environment and adapt it's decision making over time through environmental feedback.\n    </p>\n    <h4>Class Structure</h4>\n    <p>\n      The following UML-Class diagram shows the composition of the Solver:\n    </p>\n    <p>\n      <a target=\"_blank\" href=\"https://github.com/mvrahden/reinforce-js/blob/master/docs/img/dqn-solver-uml.svg\">\n        <img src=\"https://rawgit.com/mvrahden/reinforce-js/master/docs/img/dqn-solver-uml.svg\"\n          width=\"550px\" height=\"250px\" style=\"max-width:100%;\">\n      </a>\n    </p>\n    <p>\n      The construction of a solver requires instances of the Classes <code>DQNEnv</code> and <code>DQNOpt</code>.\n      These instances provide all necessary information about the environment and the decision-making and learning of the Agent.\n    </p>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <div style=\"width: 185px;\">Hyperparameter</div>\n        </mat-panel-title>\n        <mat-panel-description style=\"align-content: left;\">\n          <div style=\"width: 300px;\">Description of the hyperparameter</div>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <ul>\n        <li>\n          <strong>DQNEnv</strong> holds information about the environment.\n          <ul>\n            <li><code>numberOfStates</code> describes the length of the Vector (<strong>s</strong>) of observations</li>\n            <li><code>numberOfActions</code> describes the number of potential actions to choose from</li>\n          </ul>\n        </li>\n        <li>\n          <strong>DQNOpt</strong> holds all the hyperparamters for the <em>learning</em> and <em>decision making</em>.\n          <ul>\n            <li><code>numberOfHiddenUnits</code>: amount of hidden units in the hidden layer of the neural network</li>\n            <li><code>trainingMode</code>: mode of training, defines the explorative behaviour of the solver (decaying or stable)</li>\n            <li><code>epsilon</code>: static exploration rate (during non-training mode)</li>\n            <li><code>epsilonMax</code>, <code>epsilonMin</code>, <code>epsilonDecayPeriod</code>: linear decay of exploration during training mode</li>\n            <li><code>alpha</code>: discount factor for the network update</li>\n            <li><code>gamma</code>: discount factor for the Bellmann function</li>\n            <li><code>doLossClipping</code>: controll flag for the clipping of the loss function during learning</li>\n            <li><code>lossClamp</code>: the size of the loss clipping</li>\n            <li><code>doRewardClipping</code>: controll flag for the clipping of the injected reward</li>\n            <li><code>rewardClamp</code>: the size of the reward clipping</li>\n            <li><code>experienceSize</code>: size of the replay memory</li>\n            <li><code>replayInterval</code>: interval of memory replay</li>\n            <li><code>replaySteps</code>: size of the replay sample</li>\n          </ul>\n        </li>\n      </ul>\n    </mat-expansion-panel>\n    <h4>State-Action-Reward Scheme</h4>\n    <p>\n      The solver provides primarily two methods.\n      The <code>decide</code>-method allows for the decision making and the <code>learn</code>-method enables the adaptive learning of the solver.\n      To decide upon an action the solver needs a vector (<code>s: Array&lt;number&gt;</code>) of current observations (states) and it then returns the <u>index</u> of the action (<code>a: number</code>) to be executed.\n      After the action was executed the solver takes an integer reward (<code>r: number</code>) to <code>learn</code> from the effectivity of the action.\n    </p>\n    <p>\n      The appended scheme gives a brief overview of the concept of the solver.\n      As seen, the <code>DQNSolver</code> is constructed with a set of hyperparameters defined via <code>DQNOpt</code> and the description of the environment defined by <code>DQNEnv</code>.\n      The solver is then enabled to make decisions based on a set of observations (<strong>s</strong>).\n      The decision making can then be influenced by providing a reward value.\n    </p>\n    <p>\n      Assuming the solver has decided and learned at least once, the <strong>s</strong>tate and <strong>a</strong>ction of the current iteration plus the <strong>r</strong>eward, <strong>s</strong>tate and <strong>a</strong>ction of the last iteration resolve into an experience (called sarsa-tuple) for the replay memory.\n      When aiming for a stable learning, the clipping of the <em>reward</em> and <em>loss</em> is recommended.\n    </p>\n    <p>\n      <a target=\"_blank\" href=\"https://github.com/mvrahden/reinforce-js/blob/master/docs/img/dqn-solver.svg\">\n        <img src=\"https://rawgit.com/mvrahden/reinforce-js/master/docs/img/dqn-solver.svg\"\n          width=\"600px\" height=\"420px\" style=\"max-width:100%;\">\n      </a>\n    </p>\n    <p>For further information please consult the research paper of\n      <a href=\"http://www.nature.com/articles/nature14236\" rel=\"nofollow\">Mnih et al. (2015)\n        <em>\"Human-level control through deep reinforcement learning\"</em>\n      </a>\n    </p>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/dqn-method/dqn-method.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DQNComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let DQNComponent = class DQNComponent {
};
DQNComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("./src/app/dqn-method/dqn-method.component.html"),
        styles: [__webpack_require__("./src/app/dqn-method/dqn-method.component.css")]
    })
], DQNComponent);



/***/ }),

/***/ "./src/app/explanation/explanation.component.css":
/***/ (function(module, exports) {

module.exports = "/* app-about {\n  margin: 5px;\n  padding: 5px;\n}\n */\n\nli{\n    margin-top: 10px;\n}\n\nli:first-child {\n    margin-top:0;\n}\n\ntable, td, th {\n  border: none;\n  border-collapse: collapse;\n}\n\ntd, th {\n  padding: 10px 5px;\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\ntable > tbody > tr > td {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  font-size: 14px;\n  font-weight: lighter;\n  line-height: 1.5;\n  border: 0;\n  border-radius: 0;\n}\n\ntable > thead > tr > th {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.5;\n  border-bottom: 1px solid rgb(208, 208, 208);\n}\n\ntable > tbody > tr:hover {\n  -webkit-transition: background-color .25s ease;\n  transition: background-color .25s ease;\n  background-color: rgb(242, 242, 242);\n}"

/***/ }),

/***/ "./src/app/explanation/explanation.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"second-toolbar\">\n  <mat-toolbar-row></mat-toolbar-row>\n  <mat-toolbar-row>\n    <h1>Explanation</h1>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Explanation</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <div style=\"width: 185px;\">World composition</div>\n        </mat-panel-title>\n        <mat-panel-description style=\"align-content: left;\">\n          <div style=\"width: 300px;\">Description of the world components</div>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <p>\n        The canvases in the Tabs <b>Pre-Trained</b> and <b>Simulation</b> show a 2-dimensional world with two agents navigating around and roughly 50 items floating randomly around in it.\n      </p>\n      <p>\n        Both agents are composed with different sensory but with an identical dimensioned \"brain\" (DQN-Solver).\n        One of the agents has a <i>ray-based</i> sensory and the other one has a <i>field-based</i> sensory.\n        Either sensory enables the agents to detect objects (e.g. items, walls and other agents) in their environment.\n        On collision with an item, the agents are either rewarded or punished, depending on their respective valuation.\n        Based on these incentivizing feedbacks, the agents ultimate goal is to learn to avoid the harmful items and collect the beneficial ones by accelerating either towards or away from the items accordingly.\n        Additionally to the rewards and punishments based on experienced collisions with the items, the agents will experience punishments grounded on their perception of walls and other rivaling agents. \n      </p>\n      <p>\n        In the <b>Pre-Trained</b>-Section you will find two pre-trained agents from a former simulation run.\n        The <b>Simulation</b>-Section shows two freshly initialized agents, that are to be trained during a simulation run.\n        As it can be observed, the pre-trained agents are already pretty good in contrast to the freshly initialized agents at collecting the beneficial items (<font color=\"green\">green</font>) and avoiding the harmful ones (<font color=\"red\">red</font>).\n        The environment logic ensures that new items are spawned randomly, should an item be consumed by an agent.\n        This means, an item has a random type, a random location and a random speed.\n      </p>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <div style=\"width: 185px;\">Project Structure</div>\n        </mat-panel-title>\n        <mat-panel-description style=\"align-content: left;\">\n          <div style=\"width: 300px;\">Description of the project dependencies</div>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <p>\n        The project is structured into several components.\n        The frontend view, which you can currently see on this website is located in the <a href=\"https://github.com/mvrahden/learning-agents/\"><b>Learning Agents</b></a> repository.\n        This frontend view contains the whole simulation control and the utilities to visualize the logic of the model.\n        The model is located in the <a href=\"https://github.com/mvrahden/learning-agents-model/\"><b>Learning Agents Model</b></a> repository.\n        It contains the logic for the behaviors and states of each world component, be it an agent, an item or a wall.\n        With all the sensory, the inference and the actioning the agents are the world components harboring a gross of the logic.\n        The whole logic for the perception, the reward and punishment calculation and the actioning is located within this repository.\n      </p>\n      <p>\n        In contrast the logic for the inference is located in the <a href=\"https://github.com/mvrahden/reinforce-js/\"><b>reinforce-js</b></a> library.\n        This inference logic is based on the <b>DQN-Method</b> presented by <a href=\"https://www.nature.com/articles/nature14236\"><i>Mnih et al. (2015)</i></a> in the research paper <i>\"Human-level control through deep reinforcement learning\"</i>, which itself is based on <b>neural networks</b> in combination with <b>reinforcement learning</b>.\n        The <b>reinforce-js</b> library itself makes use of the <a href=\"https://github.com/mvrahden/recurrent-js/\"><b>recurrent-js</b></a> library to generate and train the neural networks.\n      </p>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <div style=\"width: 185px;\">Simulation</div>\n        </mat-panel-title>\n        <mat-panel-description style=\"align-content: left;\">\n          <div style=\"width: 300px;\">Description of the simulation sequence</div>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <p>\n        The simulation sequence is configured according to the simulation process of the <a href=\"https://www.nature.com/articles/nature14236\"><i>Mnih et al. (2015)</i> - \"Human-level control through deep reinforcement learning\"</a> research paper.\n        It is split into two phases a first phase which we will call <b>Trainings Mode</b> and a second phase which we'll call <b>Evaluation Mode</b>.\n        The trainings mode is automatically initialized as the simulation panel is opened.\n        It is a standardized mode which tries to provide equal training conditions for all simulations.\n        In this mode the item population is <u>actively controlled</u> to be somewhat evenly distributed.\n        During this mode the agents inference mechanism is configured to <u>explore</u> their environments state space &ndash; meaning the agents will have a high but over time decaying degree of random navigation behaviors.\n        This exploration vs. exploitation decay is linear over time, enforced via the hyperparameter configuration of the individual agents.\n      </p>\n      <p>\n        After 2.5 million iterations (with 24 iterations per second at normal speed and &asymp;216 iterations per second at fast speed) the simulation automatically switches the environment and the agents into evaluation mode.\n        During the evaluation mode the agents will have a toned down exploration value, perhaps around 5&#37;.\n        This ensures that most of the exposed behavior will be according to what the neural network of each agent will have approximated, hence it will expose what it has learned to predict.\n      </p>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <div style=\"width: 185px;\">Hyperparameter</div>\n        </mat-panel-title>\n        <mat-panel-description style=\"align-content: left;\">\n          <div style=\"width: 300px;\">Configuration of the hyperparameters</div>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <p>\n        Hyperparameters are a set of constants, that are used to configure the initial state of an agents inference mechanism.\n        In the following list, we provide an overview of the used hyperparameter configuration during this simulation.\n      </p>\n      <h4>Parameters Depending on the Environment</h4>\n      <div id=\"data-table\">\n        <table width=\"100%\" class=\"highlight\">\n          <thead>\n            <tr>\n              <th>Symbol</th>\n              <th>Name</th>\n              <th>Value</th>\n              <th>Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><i>n<sub>s</sub></i></td>\n              <td><code>numberOfStates</code></td>\n              <td>152</td>\n              <td style=\"text-align: left;\">Perceptable Parameters and size of input layer</td>\n            </tr>\n            <tr>\n              <td><i>n<sub>a</sub></i></td>\n              <td><code>numberOfActions</code></td>\n              <td>4</td>\n              <td style=\"text-align: left;\">Available executable Actions for Agents</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <h4>Parameters defining the overall Inference Accuracy</h4>\n      <div id=\"data-table\">\n        <table width=\"100%\" class=\"highlight\">\n          <thead>\n            <tr>\n              <th>Symbol</th>\n              <th>Name</th>\n              <th>Value</th>\n              <th>Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><i>n<sub>h</sub></i></td>\n              <td><code>numberOfHiddenUnits</code></td>\n              <td>100</td>\n              <td style=\"text-align: left;\">Dimension of neural network approximator</td>\n            </tr>\n            <tr>\n              <td><i><sub></sub></i></td>\n              <td></td>\n              <td></td>\n              <td style=\"text-align: left;\"></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <h4>Parameters defining the Decision Behavior</h4>\n      <div id=\"data-table\">\n        <table width=\"100%\" class=\"highlight\">\n          <thead>\n            <tr>\n              <th>Symbol</th>\n              <th>Name</th>\n              <th>Value</th>\n              <th>Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><i>&epsilon;<sub>max</sub></i></td>\n              <td><code>epsilonMax</code></td>\n              <td>1.00</td>\n              <td style=\"text-align: left;\">Upper bound of exploration during training</td>\n            </tr>\n            <tr>\n              <td><i>&epsilon;<sub>min</sub></i></td>\n              <td><code>epsilonMax</code></td>\n              <td>0.10</td>\n              <td style=\"text-align: left;\">Lower bound of exploration during training</td>\n            </tr>\n            <tr>\n              <td><i>t<sub>&epsilon;</sub></i></td>\n              <td><code>epsilonDecayPeriod</code></td>\n              <td>1e6</td>\n              <td style=\"text-align: left;\">Duration of exploration-decay</td>\n            </tr>\n            <tr>\n              <td><i>&epsilon;</i></td>\n              <td><code>epsilon</code></td>\n              <td>0.05</td>\n              <td style=\"text-align: left;\">Static exploration during evaluation mode</td>\n            </tr>\n            <tr>\n              <td></td>\n              <td><code>trainingMode</code></td>\n              <td>true</td>\n              <td style=\"text-align: left;\">Toggle training and evaluation mode</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <h4>Parameters defining the Learning Behavior</h4>\n      <div id=\"data-table\">\n        <table width=\"100%\" class=\"highlight\">\n          <thead>\n            <tr>\n              <th>Symbol</th>\n              <th>Name</th>\n              <th>Value</th>\n              <th>Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><i>&gamma;</i></td>\n              <td><code>gamma</code></td>\n              <td>0.95</td>\n              <td style=\"text-align: left;\">Discount factor of the Bellman equation</td>\n            </tr>\n            <tr>\n              <td><i>&alpha;</i></td>\n              <td><code>alpha</code></td>\n              <td>0.01</td>\n              <td style=\"text-align: left;\">Discount factor for the neural network update</td>\n            </tr>\n            <tr>\n              <td><i><sub></sub></i></td>\n              <td><code>doLossClipping</code></td>\n              <td><code>true</code></td>\n              <td style=\"text-align: left;\">Toggle loss clipping</td>\n            </tr>\n            <tr>\n              <td><i>L<sub>clamp</sub></i></td>\n              <td><code>lossClamp</code></td>\n              <td>1.00</td>\n              <td style=\"text-align: left;\">Clamp for loss value, for learning stabilization</td>\n            </tr>\n            <tr>\n              <td><i><sub></sub></i></td>\n              <td><code>doRewardClipping</code></td>\n              <td><code>true</code></td>\n              <td style=\"text-align: left;\">Toggle reward clipping</td>\n            </tr>\n            <tr>\n              <td><i>r<sub>clamp</sub></i></td>\n              <td><code>rewardClamp</code></td>\n              <td>1.00</td>\n              <td style=\"text-align: left;\">Clamp for reward value, for learning stabilization</td>\n            </tr>\n            <tr>\n              <td><i>n<sub>Exp</sub></i></td>\n              <td><code>experienceSize</code></td>\n              <td>1e6</td>\n              <td style=\"text-align: left;\">Size of the experience memory</td>\n            </tr>\n            <tr>\n              <td></td>\n              <td><code>keepExperience-Interval</code></td>\n              <td>25</td>\n              <td style=\"text-align: left;\">Interval for memorizing experiences</td>\n            </tr>\n            <tr>\n              <td></td>\n              <td><code>replaySteps</code></td>\n              <td>10</td>\n              <td style=\"text-align: left;\">Amount of memory replay steps</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <div style=\"width: 185px;\">Simulation Results</div>\n        </mat-panel-title>\n        <mat-panel-description style=\"align-content: left;\">\n          <div style=\"width: 300px;\">Summary of Simulation Results</div>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <p>\n        The simulation in total endures 10 million iterations.\n        During the simulation several performance measures are captured.\n        For example as in figure 1. and 2. shown the development of the total consumption of items of both agents.\n        On the x-Axis one can find the number of iterations in millions.\n        On the y-Axis one can find the number of consumed items in thousands.\n      </p>\n      <mat-grid-list cols=\"2\" rowHeight=\"55px\">\n        <mat-grid-tile colspan=\"1\" rowspan=\"4\" style=\"align-content:center;\">\n          <img src=\"./assets/showcase-eval-01-items.png\">\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"1\" rowspan=\"4\" style=\"align-content:center;\">\n          <img src=\"./assets/showcase-eval-02-items.png\">\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"1\" rowspan=\"1\" style=\"text-align:center;\">\n          <p>\n            Fig. 1.) Item consumption of agent 1 over time\n          </p>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"1\" rowspan=\"1\" style=\"text-align:center;\">\n          <p>\n            Fig. 2.) Item consumption of agent 2 over time\n          </p>\n        </mat-grid-tile>\n      </mat-grid-list>\n      <p>\n        The colored lines represent the measurements under the environmental boundary condition of an actively <u>balanced</u> item population &ndash; meaning that the population is being consciously controlled to be balanced.\n        Whereas the dashed lines are representing the measurements under item <u>scarcity</u> (uncontrolled).\n        The higher the green line the better, the lower the red line the better.\n        One can observe that the performance of both agents regarding the avoidance of the harmful (<font color=\"red\">red</font>) items is getting even better under the condition of scarcity.\n      </p>\n      <p>\n        Figure 3. and 4. present the measurements of the detection punishments in thousands for each agent.\n        It is clearly observable, that in all figures there is a learning curve.\n        The lower all lines the better.\n      </p>\n      <mat-grid-list cols=\"2\" rowHeight=\"55px\">\n        <mat-grid-tile colspan=\"1\" rowspan=\"4\" style=\"align-content:center;\">\n          <img src=\"./assets/showcase-eval-01-agents-walls.png\">\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"1\" rowspan=\"4\" style=\"align-content:center;\">\n          <img src=\"./assets/showcase-eval-02-agents-walls.png\">\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"1\" rowspan=\"1\" style=\"text-align:center;\">\n          <p>\n            Fig. 1.) Detection punishments of agent 1 over time\n          </p>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"1\" rowspan=\"1\" style=\"text-align:center;\">\n          <p>\n            Fig. 2.) Detection punishments of agent 2 over time\n          </p>\n        </mat-grid-tile>\n      </mat-grid-list>\n      <p>\n        Even here it is seen, that the learning under the scarcity condition is always outperforming the learning under controlled item population.\n        The explanation for this tendency is simple:\n        In the scarcity scenario, the population of the beneficial items instantaneously decreases to a very small amount.\n        This leads to an excessive exposure of the agents with harmful items, leading them to learn even better to avoid these kind of items.\n        Since now there are few beneficial items on the field and a lot of harmful items the agents are not experiencing a lot of rewards.\n        Hence, the agents can now distinguish even better the source of the rewards and punishments, leading them to also learn better to avoid wall detection.\n      </p>\n    </mat-expansion-panel>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/explanation/explanation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplanationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ExplanationComponent = class ExplanationComponent {
};
ExplanationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-explanation',
        template: __webpack_require__("./src/app/explanation/explanation.component.html"),
        styles: [__webpack_require__("./src/app/explanation/explanation.component.css")]
    })
], ExplanationComponent);



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\n#nav-bar-panel {\n  background-color: rgb(204, 204, 204);\n  padding: 0px;\n  margin: 0px;\n}\n.button-logo {\n  vertical-align: middle;\n  height: 26px;\n  margin: 0 4px 3px 0;\n}\n.flex-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z6\">\n  <mat-toolbar-row>\n    <span class=\"mat-button-wrapper\">\n      <img src=\"./assets/learning-agents-logo.png\" class=\"button-logo\">\n    </span>\n    <button \n      mat-button\n      *ngFor=\"let link of links\"\n      [routerLink]=\"link.route\"\n      routerLinkActive #rla=\"routerLinkActive\">\n    {{link.label}}\n    </button>\n    <div class=\"flex-spacer\"></div>\n    <span class=\"mat-button-wrapper\">\n      <a mat-button href=\"https://github.com/mvrahden/learning-agents/\">\n        <img src=\"./assets/github-circle-white-transparent.svg\" class=\"button-logo\">\n        GitHub</a>\n    </span>\n  </mat-toolbar-row>\n</mat-toolbar>\n<div id=\"app-content\" style=\"position: relative;\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let NavigationComponent = class NavigationComponent {
    constructor() {
        this.links = [{
                label: 'Pre-Trained',
                route: '/pretrained'
            }, {
                label: 'Simulation',
                route: '/simulation'
            }, {
                label: 'Explanation',
                route: '/explanation'
            }, {
                label: 'DQN-Method',
                route: '/dqn-method'
            }, {
                label: 'About',
                route: '/about'
            }
        ];
    }
};
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("./src/app/navigation/navigation.component.css")]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/pretrained/pretrained.component.css":
/***/ (function(module, exports) {

module.exports = "#sim-control-panel, #chart-control-panel {\n  width: 100%;\n}\n\n.button-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 15px 0;\n}\n\n#chart-control-panel > .button-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: right;\n      -ms-flex-align: right;\n          align-items: right;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-bottom: 5px;\n}\n\ntable, td, th {\n  border: none;\n  border-collapse: collapse;\n}\n\ntd, th {\n  padding: 10px 5px;\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\ntable > tbody > tr > td {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  font-size: 14px;\n  font-weight: lighter;\n  line-height: 1.5;\n  border: 0;\n  border-radius: 0;\n}\n\ntable > thead > tr > th {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.5;\n  border-bottom: 1px solid rgb(208, 208, 208);\n}\n\ntable > tbody > tr:hover {\n  -webkit-transition: background-color .25s ease;\n  transition: background-color .25s ease;\n  background-color: rgb(242, 242, 242);\n}\n\n/* mat-card.reward-chart {\n  width: 600px;\n  height: 300px;\n} */"

/***/ }),

/***/ "./src/app/pretrained/pretrained.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"second-toolbar\">\n  <mat-toolbar-row></mat-toolbar-row>\n  <mat-toolbar-row>\n    <h1>Pre-trained Agents</h1>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Simulation</mat-card-title>\n  </mat-card-header>\n  <div id=\"sim-control-panel\">\n    <div id=\"sim-control-buttons\">\n      <mat-button-toggle-group class=\"button-row\">\n        <button mat-button color=\"primary\" *ngIf=\"!isPaused\" (click)=\"pause()\">Pause</button>\n        <button mat-button color=\"warn\" *ngIf=\"isPaused\" (click)=\"start()\">Run</button>\n        <button mat-button matTooltip=\"Click to reload the brains from GitHub.\" matTooltipPosition=\"before\" color=\"warn\" *ngIf=\"!isFullyLoaded\" (click)=\"reload()\">Brains didn't load!</button>\n        <button mat-button matTooltip=\"Click to reload the brains from GitHub.\" matTooltipPosition=\"before\" color=\"primary\" *ngIf=\"isFullyLoaded\" (click)=\"reload()\">Brains are loaded</button>\n      </mat-button-toggle-group>\n    </div>\n    <div id=\"sim-speed-buttons\">\n      <mat-button-toggle-group class=\"button-row\" value=\"{{simSpeedIndex}}\">\n        <mat-button-toggle value=\"3\" matTooltip=\"Depending on your systems CPU, visualization could be lagging. In this case, prefer 'Fast'.\" matTooltipPosition=\"right\" (click)=\"goMax()\">Max</mat-button-toggle>\n        <mat-button-toggle value=\"2\" (click)=\"goFast()\">Fast</mat-button-toggle>\n        <mat-button-toggle value=\"1\" (click)=\"goNormal()\">Normal</mat-button-toggle>\n        <mat-button-toggle value=\"0\" (click)=\"goSlow()\">Slow</mat-button-toggle>\n      </mat-button-toggle-group>\n    </div>\n  </div>\n  <canvas id=\"simulation\" width=\"{{width}}\" height=\"{{height}}\"></canvas>\n  <div id=\"data-table\">\n    <table width=\"100%\" class=\"highlight\">\n      <thead>\n        <tr>\n          <th matTooltip=\"Agent Id\">Id</th>\n          <th matTooltip=\"Total amount of collected green Items\">tot. green Items</th>\n          <th matTooltip=\"Total amount of collected red Items\">tot. red Items</th>\n          <th matTooltip=\"Amount of collected green Items per second\">curr. green Items</th>\n          <th matTooltip=\"Amount of collected red Items per second\">curr. red Items</th>\n          <th matTooltip=\"Wall detection punishment per second\">Walls</th>\n          <th matTooltip=\"Agent detection punishment per second\">Agents</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let collision of collisionStats.collisions; let i = index\" [attr.data-index]=\"i\">\n          <td>{{i + 1}}</td>\n          <td>{{collision.totalItem0Collisions}}</td>\n          <td>{{collision.totalItem1Collisions}}</td>\n          <td>{{collision.item0Collisions}}</td>\n          <td>{{collision.item1Collisions}}</td>\n          <td>{{collision.wallDetectionReward | number: '3.2-2'}}</td>\n          <td>{{collision.agentDetectionReward | number: '3.2-2'}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div id=\"chart-control-panel\">\n    <mat-button-toggle-group class=\"button-row\">\n      <button mat-button color=\"accent\" *ngIf=\"!isPausedPlotting\" (click)=\"pausePlotting()\">Pause Plotting</button>\n      <button mat-button color=\"warn\" *ngIf=\"isPausedPlotting\" (click)=\"pausePlotting()\">Run Plotting</button>\n    </mat-button-toggle-group>\n    <div matTooltip=\"Shows the rewards and punishments of the Agents over time.\" matTooltipPosition=\"above\" id=\"reward-chart\" style=\"width:100%; height: 300px;\"></div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pretrained/pretrained.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PretrainedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewcontrol_viewcontrol__ = __webpack_require__("./src/app/viewcontrol/viewcontrol.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let PretrainedComponent = class PretrainedComponent extends __WEBPACK_IMPORTED_MODULE_1__viewcontrol_viewcontrol__["a" /* ViewControl */] {
    constructor() {
        super();
        this.baseUrl = "https://rawgit.com/mvrahden/learning-agents/master/src/app/pretrained/brains/agent-brain-state.";
        this.loadedBrainCounter = 0;
        this.isFullyLoaded = false;
    }
    initConcrete() {
        this.loadedBrainCounter = 0;
        this.isFullyLoaded = false;
        this.switchAgentsToEvaluationMode();
        this.loadBrains();
    }
    switchAgentsToEvaluationMode() {
        this.world.switchTrainingModeOfAgents(false);
    }
    reload() {
        this.initConcrete();
    }
    loadBrains() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.maxAgents; i++) {
                const brain = this.queryBrain(i);
                const agent = this.world.agents[i];
            }
            return null;
        });
    }
    queryBrain(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = this.getHttpRequestFor(id);
            const self = this;
            const promise = new Promise((resolve, reject) => {
                $.ajax(request).done((data) => {
                    self.resolve(id, data);
                }).fail((jqxhr, textStatus, error) => {
                    self.reject(id, jqxhr, textStatus, error);
                });
            });
            return promise;
        });
    }
    resolve(id, data) {
        this.loadBrain(id, data);
        console.log("Brain of Agent " + (id + 1) + " loaded successfully!");
        this.registerLoading(id);
    }
    loadBrain(id, brain) {
        this.world.agents[id].load(brain);
    }
    registerLoading(id) {
        this.loadedBrainCounter++;
        if (this.loadedBrainCounter === this.world.agents.length) {
            this.isFullyLoaded = true;
        }
    }
    reject(id, jqxhr, textStatus, error) {
        console.log("Brain of Agent " + (id + 1) + " didn't load successfully!");
        console.log(textStatus + ", " + error);
    }
    getHttpRequestFor(id) {
        return {
            type: 'GET',
            dataType: 'json',
            async: true,
            url: this.getUrlFor(id),
            xhrFields: {
                withCredentials: false
            }
        };
    }
    getUrlFor(id) {
        return this.baseUrl + id + ".json";
    }
    handleEvaluationPeriodActivation() { }
};
PretrainedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-pretrained',
        template: __webpack_require__("./src/app/pretrained/pretrained.component.html"),
        styles: [__webpack_require__("./src/app/pretrained/pretrained.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PretrainedComponent);



/***/ }),

/***/ "./src/app/simulation/simulation.component.css":
/***/ (function(module, exports) {

module.exports = "#sim-control-panel, #chart-control-panel {\n  width: 100%;\n}\n\n.button-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 15px 0;\n}\n\n#chart-control-panel > .button-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: right;\n      -ms-flex-align: right;\n          align-items: right;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-bottom: 5px;\n}\n\ntable, td, th {\n  border: none;\n  border-collapse: collapse;\n}\n\ntd, th {\n  padding: 10px 5px;\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n}\n\ntable > tbody > tr > td {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  font-size: 14px;\n  font-weight: lighter;\n  line-height: 1.5;\n  border: 0;\n  border-radius: 0;\n}\n\ntable > thead > tr > th {\n  -ms-flex-line-pack: center;\n      align-content: center;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.5;\n  border-bottom: 1px solid rgb(208, 208, 208);\n}\n\ntable > tbody > tr:hover {\n  -webkit-transition: background-color .25s ease;\n  transition: background-color .25s ease;\n  background-color: rgb(242, 242, 242);\n}\n\n/* mat-card.reward-chart {\n  width: 600px;\n  height: 300px;\n} */"

/***/ }),

/***/ "./src/app/simulation/simulation.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"second-toolbar\">\n  <mat-toolbar-row></mat-toolbar-row>\n  <mat-toolbar-row>\n    <h1>Simulation: Learning Agents</h1>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-card class=\"simulation-panel\">\n  <mat-card-header>\n    <mat-card-title>Simulation</mat-card-title>\n  </mat-card-header>\n  <div id=\"sim-control-panel\">\n    <div id=\"sim-control-buttons\">\n      <mat-button-toggle-group class=\"button-row\">\n        <button mat-button color=\"primary\" *ngIf=\"!isPaused\" (click)=\"pause()\">Pause</button>\n        <button mat-button color=\"warn\" *ngIf=\"isPaused\" (click)=\"start()\">Run</button>\n        <button mat-button (click)=\"reset()\">Reset</button>\n        <button mat-button color=\"accent\" *ngIf=\"!isPausedDrawing\" (click)=\"pauseDrawing()\">Pause Visualization</button>\n        <button mat-button color=\"warn\" *ngIf=\"isPausedDrawing\" (click)=\"pauseDrawing()\">Run Visualization</button>\n      </mat-button-toggle-group>\n    </div>\n    <div id=\"sim-speed-buttons\">\n      <mat-button-toggle-group class=\"button-row\" value=\"{{simSpeedIndex}}\">\n        <mat-button-toggle value=\"3\" matTooltip=\"Depending on your systems CPU, the visualization could be lagging. In this case, prefer 'Fast'.\" matTooltipPosition=\"right\" (click)=\"goMax()\">Max</mat-button-toggle>\n        <mat-button-toggle value=\"2\" (click)=\"goFast()\">Fast</mat-button-toggle>\n        <mat-button-toggle value=\"1\" (click)=\"goNormal()\">Normal</mat-button-toggle>\n        <mat-button-toggle value=\"0\" (click)=\"goSlow()\">Slow</mat-button-toggle>\n      </mat-button-toggle-group>\n    </div>\n  </div>\n  <canvas id=\"simulation\" width=\"{{width}}\" height=\"{{height}}\"></canvas>\n  <div id=\"data-table\">\n    <table width=\"100%\" class=\"highlight\">\n      <thead>\n        <tr>\n          <th matTooltip=\"Agent Id\">Id</th>\n          <th matTooltip=\"Total amount of collected green Items\">tot. green Items</th>\n          <th matTooltip=\"Total amount of collected red Items\">tot. red Items</th>\n          <th matTooltip=\"Amount of collected green Items per second\">curr. green Items</th>\n          <th matTooltip=\"Amount of collected red Items per second\">curr. red Items</th>\n          <th matTooltip=\"Wall detection punishment per second\">Walls</th>\n          <th matTooltip=\"Agent detection punishment per second\">Agents</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let collision of collisionStats.collisions; let i = index\" [attr.data-index]=\"i\">\n          <td>{{i + 1}}</td>\n          <td>{{collision.totalItem0Collisions}}</td>\n          <td>{{collision.totalItem1Collisions}}</td>\n          <td>{{collision.item0Collisions}}</td>\n          <td>{{collision.item1Collisions}}</td>\n          <td>{{collision.wallDetectionReward | number: '3.2-2'}}</td>\n          <td>{{collision.agentDetectionReward | number: '3.2-2'}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div id=\"chart-control-panel\">\n    <mat-button-toggle-group class=\"button-row\">\n      <button mat-button matTooltip=\"Logs the current state into your browsers console.\" matTooltipPosition=\"before\" (click)=\"logEvaluation()\">Log Evaluation</button>\n      <button mat-button color=\"accent\" *ngIf=\"!isPausedPlotting\" (click)=\"pausePlotting()\">Pause Plotting</button>\n      <button mat-button color=\"warn\" *ngIf=\"isPausedPlotting\" (click)=\"pausePlotting()\">Run Plotting</button>\n    </mat-button-toggle-group>\n    <div matTooltip=\"Shows the rewards and punishments of the Agents over time.\" matTooltipPosition=\"above\" id=\"reward-chart\" style=\"width:100%; height: 300px;\"></div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/simulation/simulation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_learning_agents_model__ = __webpack_require__("./node_modules/learning-agents-model/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_learning_agents_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_learning_agents_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewcontrol_viewcontrol__ = __webpack_require__("./src/app/viewcontrol/viewcontrol.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SimulationComponent = class SimulationComponent extends __WEBPACK_IMPORTED_MODULE_2__viewcontrol_viewcontrol__["a" /* ViewControl */] {
    constructor() {
        super();
        this.trainingPeriod = 2.5e6;
        // Simulation and Controls
        this.valueAlternationTick = 0;
    }
    initConcrete() { }
    handleEvaluationPeriodActivation() {
        if (this.world.clock() === this.trainingPeriod) {
            // when trainings period is over, set value alternation intervall
            this.switchAgentsToEvaluationMode();
            this.activateCurrentEnvironmentSetup();
            console.log('[' + new Date().toISOString() + ']: Training of Agent is done!'
                + '\nStarting evaluation phase with the chosen setup!'
                + '\nCurrent Timestamp: ' + new Date().getTime());
        }
    }
    switchAgentsToEvaluationMode() {
        this.world.switchTrainingModeOfAgents(false);
    }
    activateCurrentEnvironmentSetup() {
        this.setValueAlternationInterval(); // deactivate on static valuation
        this.world.setBoundaryCondition('scarce'); // other option: 'scarce'
    }
    logEvaluation() {
        this.logSpecs();
        this.logCollisionHistory();
        this.logItemChangeHistory();
        this.logAgentBrainState();
    }
    logSpecs() {
        console.log("Specs-Log: ");
        console.log(JSON.stringify(this.specs));
    }
    logCollisionHistory() {
        console.log("Collision History-Log: ");
        for (const i of this.collisionStats.collisionHistory.keys()) {
            let data = {};
            data['agentId'] = i.toString();
            data['collisionHistory'] = JSON.stringify(this.collisionStats.collisionHistory[i]);
            console.log(JSON.stringify(data));
        }
    }
    logItemChangeHistory() {
        console.log("Item Change History-Log: ");
        let data = {};
        data['itemChangeHistory'] = JSON.stringify(this.collisionStats.itemChangeHistory);
        console.log(JSON.stringify(data));
    }
    logAgentBrainState() {
        console.log("Agent Brains-Log: ");
        for (const [i, agent] of this.world.getAgents().entries()) {
            let data = {};
            data['agentId'] = i.toString();
            data['brainState'] = JSON.stringify(agent.brain.toJSON());
            console.log(JSON.stringify(data));
        }
    }
    setValueAlternationInterval(milliseconds = 4630 * 1000) {
        window.clearInterval(this.simValueAlternationIntervalId);
        if (!this.isPaused) {
            const self = this;
            const func = function () {
                self.alternateValues();
                const item0ofAgent0 = self.world.getAgents()[0].sensory.totalItem0Collisions;
                const item1ofAgent0 = self.world.getAgents()[0].sensory.totalItem1Collisions;
                const item0ofAgent1 = self.world.getAgents()[1].sensory.totalItem0Collisions;
                const item1ofAgent1 = self.world.getAgents()[1].sensory.totalItem1Collisions;
                console.log('[' + new Date().toISOString() + ']: Values: ' + __WEBPACK_IMPORTED_MODULE_1_learning_agents_model__["WorldObject"].getValues() + '\t');
                console.log('[' + new Date().toISOString() + ']: Agent 1: ' + item0ofAgent0 + ' vs. ' + item1ofAgent0);
                console.log('[' + new Date().toISOString() + ']: Agent 2: ' + item0ofAgent1 + ' vs. ' + item1ofAgent1);
            };
            this.simValueAlternationIntervalId = setInterval(func, milliseconds);
        }
    }
    alternateValues() {
        if (this.world.clock() > this.trainingPeriod) {
            this.valueAlternationTick++;
            let values = [-1, -1, 1, -1];
            if (this.valueAlternationTick % 2 === 0) {
                values = [-1, 1, -1, -1];
            }
            __WEBPACK_IMPORTED_MODULE_1_learning_agents_model__["WorldObject"].setValues(values);
        }
    }
};
SimulationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-simulation',
        template: __webpack_require__("./src/app/simulation/simulation.component.html"),
        styles: [__webpack_require__("./src/app/simulation/simulation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SimulationComponent);



/***/ }),

/***/ "./src/app/viewcontrol/utils/canvas.utility.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CanvasUtility {
    constructor(canvas, document, width, height) {
        this.agentView = false;
        this.defaultFillColor = "rgba(255, 255, 255, 0)"; // #464646 strong grey
        this.defaultStrokeColor = "rgba(70, 70, 70, 1) 0.5px"; // #464646 strong grey
        this.detectedNothingStrokeStyle = "rgba(192, 192, 192, 0.5)"; // #c4c4c4 light grey
        this.detectedWallStrokeStyle = "rgba(70, 70, 70, 1)"; // #ff8000 strong orange
        this.detectedItem1StrokeStyle = "rgba(0, 120, 0, 0.65)"; // #b30000 dark red
        this.detectedItem2StrokeStyle = "rgba(179, 0, 0, 0.65)"; // #96ff96 grün
        this.detectedItem3StrokeStyle = "rgba(0, 0, 180, 0.9)"; // #96ff96 grün
        this.detectedNothingFillStyle = "rgba(215, 215, 215, 0.15)"; // #c4c4c4 light grey
        this.detectedWallFillStyle = "rgba(70, 70, 70, 0.15)"; // #ff8000 strong orange
        this.detectedItem1FillStyle = "rgba(0, 240, 0, 0.15)"; // #96ff96 grün
        this.detectedItem2FillStyle = "rgba(240, 0, 0, 0.15)"; // #96ff96 grün
        this.detectedItem3FillStyle = "rgba(0, 0, 240, 0.15)"; // #96ff96 grün
        this.wallStrokeStyle = "rgba(70, 70, 70, 1)"; // #c4c4c4 light grey
        this.item1FillStyle = "rgba(150, 255, 150, 1)"; // #ff9696 light red
        this.item2FillStyle = "rgba(255, 150, 150, 1)"; // #96ff96 rot
        this.identifierFillStyle = "rgba(230, 230, 230, 1)";
        this.agentFillStyle = (r) => { return "rgb(" + r + ", 55, 55)"; };
        this.ctx = document.getElementById(canvas).getContext("2d");
        this.width = width;
        this.height = height;
    }
    draw(world) {
        // reset canvas
        this.ctx.clearRect(0, 0, this.width, this.height);
        // draw agents
        // color agent based on reward it is experiencing at the moment
        let agents = world.agents;
        this.drawAgents(agents);
        // draw items
        let items = world.items;
        this.drawItems(items);
        // draw walls in environment
        let walls = world.walls;
        this.drawWalls(walls);
    }
    drawAgents(agents) {
        for (const agent of agents) {
            this.drawAgentSensory(agent);
        }
        for (const [i, agent] of agents.entries()) {
            this.drawAgentBody(agent);
            this.drawAgentIdentifier(i + 1, agent);
        }
    }
    drawAgentSensory(agent) {
        for (const sensor of agent.sensory.sensors) {
            if (sensor.type === 0) {
                this.drawLidar(agent.location, sensor);
            }
            else if (sensor.type === 1) {
                this.drawRadar(sensor);
            }
        }
    }
    drawLidar(p1, sensor) {
        if (sensor.getSensedObject().type === -1) {
            this.ctx.strokeStyle = this.detectedNothingStrokeStyle;
            this.ctx.fillStyle = this.detectedNothingFillStyle;
        }
        else if (sensor.getSensedObject().type === 0) {
            this.ctx.strokeStyle = this.detectedWallStrokeStyle;
            this.ctx.fillStyle = this.detectedWallFillStyle;
        }
        else if (sensor.getSensedObject().type === 1) {
            this.ctx.strokeStyle = this.detectedItem1StrokeStyle;
            this.ctx.fillStyle = this.detectedItem1FillStyle;
        }
        else if (sensor.getSensedObject().type === 2) {
            this.ctx.strokeStyle = this.detectedItem2StrokeStyle;
            this.ctx.fillStyle = this.detectedItem2FillStyle;
        }
        else if (sensor.getSensedObject().type === 3) {
            this.ctx.strokeStyle = this.detectedItem3StrokeStyle;
            this.ctx.fillStyle = this.detectedItem3FillStyle;
        }
        const x1 = p1.x;
        const y1 = p1.y;
        const proximity = (sensor.getSensedObject().type === -1) ? sensor.maxRange : sensor.sensedObject.proximity;
        const x2 = p1.x + proximity * Math.sin(sensor.angle);
        const y2 = p1.y + proximity * Math.cos(sensor.angle);
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }
    drawRadar(sensor) {
        if (sensor.getSensedObject().type === -1) {
            this.ctx.strokeStyle = this.detectedNothingStrokeStyle;
            this.ctx.fillStyle = this.detectedNothingFillStyle;
        }
        else if (sensor.getSensedObject().type === 0) {
            this.ctx.strokeStyle = this.detectedNothingStrokeStyle;
            this.ctx.fillStyle = this.detectedWallFillStyle;
        }
        else if (sensor.getSensedObject().type === 1) {
            this.ctx.strokeStyle = this.detectedNothingStrokeStyle;
            this.ctx.fillStyle = this.detectedItem1FillStyle;
        }
        else if (sensor.getSensedObject().type === 2) {
            this.ctx.strokeStyle = this.detectedNothingStrokeStyle;
            this.ctx.fillStyle = this.detectedItem2FillStyle;
        }
        else if (sensor.getSensedObject().type === 3) {
            this.ctx.strokeStyle = this.detectedNothingStrokeStyle;
            this.ctx.fillStyle = this.detectedItem3FillStyle;
        }
        const x0 = sensor.location.x;
        const y0 = sensor.location.y;
        const width = sensor.width;
        const height = sensor.height;
        this.ctx.fillRect(x0, y0, width, height);
        this.ctx.strokeRect(x0, y0, width, height);
    }
    drawAgentBody(agent) {
        this.ctx.strokeStyle = this.defaultStrokeColor;
        this.ctx.fillStyle = this.agentFillStyle(55);
        this.ctx.beginPath();
        this.ctx.arc(agent.location.x, agent.location.y, agent.size, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.stroke();
    }
    drawAgentIdentifier(id, agent) {
        this.ctx.fillStyle = this.identifierFillStyle;
        this.ctx.font = "12px Roboto";
        const offsetX = (id < 10) ? -3 : -7;
        const offsetY = 4;
        this.ctx.fillText(id.toString(), agent.location.x + offsetX, agent.location.y + offsetY);
    }
    drawItems(items) {
        this.ctx.strokeStyle = this.defaultStrokeColor;
        if (!this.agentView) {
            for (const item of items) {
                if (item.type === 1) {
                    this.ctx.fillStyle = this.item1FillStyle;
                }
                if (item.type === 2) {
                    this.ctx.fillStyle = this.item2FillStyle;
                }
                this.ctx.beginPath();
                this.ctx.arc(item.location.x, item.location.y, item.size, 0, Math.PI * 2, true);
                this.ctx.fill();
                this.ctx.stroke();
            }
        }
    }
    drawWalls(walls) {
        this.ctx.strokeStyle = this.wallStrokeStyle;
        this.ctx.beginPath();
        for (const wall of walls) {
            this.ctx.lineWidth = 0.5;
            this.ctx.moveTo(wall.p1.x, wall.p1.y);
            this.ctx.lineTo(wall.p2.x, wall.p2.y);
        }
        this.ctx.stroke();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CanvasUtility;



/***/ }),

/***/ "./src/app/viewcontrol/utils/collision-stats.utility.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collision_utility__ = __webpack_require__("./src/app/viewcontrol/utils/collision.utility.ts");

class CollisionStats {
    constructor(agents, items) {
        this.init(agents, items);
    }
    init(agents, items) {
        this.resetCollisionRecords(agents);
        this.resetItemChangeRecord();
        const currentSecond = this.getTimestamp();
        this.initCollisionHistory(agents, currentSecond);
        this.initItemChangeHistory(items, currentSecond);
        this.historicalDataTick = 1;
    }
    resetItemChangeRecord() {
        this.itemChange = [0, 0, 0];
    }
    initItemChangeHistory(items, currentSecond) {
        this.itemChangeHistory = new Array();
        const [item0, item1] = this.getItemCounts(items);
        this.itemChangeHistory.push([currentSecond, items.length, item0, item1]);
    }
    getItemCounts(items) {
        let item0 = 0;
        let item1 = 0;
        for (const item of items) {
            if (item.type === 1) {
                item0++;
            }
            else if (item.type === 2) {
                item1++;
            }
        }
        return [item0, item1];
    }
    initCollisionHistory(agents, currentSecond) {
        this.collisionHistory = new Array();
        for (const id of agents.keys()) {
            this.collisionHistory.push([[currentSecond, 0, 0, 0, 0]]);
        }
    }
    reset(agents, items) {
        this.init(agents, items);
    }
    tick(worldClock, agents, items, ticksPerSecond) {
        this.tickCollisions(agents);
        this.tickItemChange(items);
        const timestamp = this.getTimestamp();
        this.tickCollisionHistory(worldClock, timestamp, agents, ticksPerSecond);
        this.tickItemHistory(worldClock, timestamp, items, ticksPerSecond);
        this.historicalDataTick++;
    }
    tickCollisions(agents) {
        for (const [i, agent] of agents.entries()) {
            this.recordAgentCollisions(i, agent);
        }
    }
    tickItemChange(items) {
        const [item0, item1] = this.getItemCounts(items);
        this.itemChange[0] += items.length;
        this.itemChange[1] += item0;
        this.itemChange[2] += item1;
    }
    recordAgentCollisions(id, agent) {
        this.collisions[id].totalItem0Collisions = agent.sensory.totalItem0Collisions;
        this.collisions[id].totalItem1Collisions = agent.sensory.totalItem1Collisions;
        this.collisions[id].item0Collisions += agent.sensory.item0CollisionsPerTick;
        this.collisions[id].item1Collisions += agent.sensory.item1CollisionsPerTick;
        this.collisions[id].wallDetectionReward += agent.sensory.wallDetectionRewardPerTick;
        this.collisions[id].agentDetectionReward += agent.sensory.agentDetectionRewardPerTick;
    }
    tickCollisionHistory(worldClock, timestamp, agents, ticksPerSecond) {
        if (worldClock % ticksPerSecond === 0) {
            for (const id of agents.keys()) {
                this.recordAgentsCollisionHistory(id, timestamp, ticksPerSecond);
            }
            this.resetCollisionRecords(agents);
        }
    }
    getTimestamp() {
        return new Date().getTime();
    }
    recordAgentsCollisionHistory(id, timestamp, ticksPerSecond) {
        this.collisionHistory[id].push([timestamp,
            this.collisions[id].item0Collisions,
            this.collisions[id].item1Collisions,
            this.collisions[id].wallDetectionReward,
            this.collisions[id].agentDetectionReward]);
    }
    resetCollisionRecords(agents) {
        this.collisions = new Array(agents.length);
        for (const [id, agent] of agents.entries()) {
            this.collisions[id] = new __WEBPACK_IMPORTED_MODULE_0__collision_utility__["a" /* Collisions */](agent.sensory.totalItem0Collisions, agent.sensory.totalItem1Collisions);
        }
    }
    tickItemHistory(worldClock, timestamp, items, ticksPerSecond) {
        if (worldClock % ticksPerSecond === 0) {
            this.itemChangeHistory.push([timestamp,
                this.itemChange[0] / ticksPerSecond,
                this.itemChange[1] / ticksPerSecond,
                this.itemChange[2] / ticksPerSecond]);
            this.resetItemChangeRecord();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CollisionStats;



/***/ }),

/***/ "./src/app/viewcontrol/utils/collision.utility.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Collisions {
    constructor(totalItem0, totalItem1) {
        this.totalItem0Collisions = totalItem0;
        this.totalItem1Collisions = totalItem1;
        this.item0Collisions = 0;
        this.item1Collisions = 0;
        this.wallDetectionReward = 0;
        this.agentDetectionReward = 0;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Collisions;



/***/ }),

/***/ "./src/app/viewcontrol/utils/flot.charts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Flot {
    constructor(htmlId, document, $, stats, xMax = 1000) {
        this.yInterval = [-140, 15];
        this.getOptsFor = (xMin, xMax, yMin = this.yInterval[0], yMax = this.yInterval[1]) => {
            return {
                grid: {
                    borderWidth: 1,
                    minBorderMargin: 20,
                    labelMargin: 10,
                    margin: {
                        top: 10,
                        bottom: 10,
                        left: 10,
                    }
                },
                xaxis: { mode: "time", timeformat: "%I:%M", min: xMin, max: xMax, borderWidth: 1 },
                yaxis: { min: yMin, max: yMax }
            };
        };
        this.container = document.getElementById(htmlId);
        this.$ = $;
        this.stats = stats;
        this.xaxisLength = xMax;
        this.opt = this.getOptsFor(new Date().getTime(), new Date().getTime() + 1000 * this.xaxisLength, this.yInterval[0], this.yInterval[1]);
    }
    init() {
    }
    reset() {
        this.init();
    }
    plot(numOfAgents) {
        const data = Array();
        for (let i = 0; i < numOfAgents; i++) {
            const res = this.gatherData(i, numOfAgents);
            data.push(res[0]);
            data.push(res[1]);
            data.push(res[2]);
            data.push(res[3]);
        }
        this.ensureXAxisInterval();
        this.$.plot(this.container, data, this.opt);
    }
    gatherData(i, numOfAgents) {
        const [item0, item1, wall, agent] = this.getHistoricalDataForAgent(i, numOfAgents);
        return [{
                label: "Agent " + (i + 1) + " (item0)",
                data: item0,
                lines: { fill: false, lineWidth: 0.4 },
                points: { show: false },
                shadowSize: 0
            }, {
                label: "Agent " + (i + 1) + " (item1)",
                data: item1,
                lines: { fill: false, lineWidth: 0.4 },
                points: { show: false },
                shadowSize: 0
            }, {
                label: "Agent " + (i + 1) + " (wall)",
                data: wall,
                lines: { fill: false, lineWidth: 0.4 },
                points: { show: false },
                shadowSize: 0
            }, {
                label: "Agent " + (i + 1) + " (agent)",
                data: agent,
                lines: { fill: false, lineWidth: 0.4 },
                points: { show: false },
                shadowSize: 0
            }];
    }
    getHistoricalDataForAgent(agentId, numOfAgents) {
        const item0 = new Array(1000);
        const item1 = new Array(1000);
        const wall = new Array(1000);
        const agent = new Array(1000);
        const lowerBound = Math.max(0, this.stats.collisionHistory[agentId].length - 1000);
        for (let j = lowerBound; j < this.stats.collisionHistory[agentId].length; j++) {
            item0[j - lowerBound] = [this.stats.collisionHistory[agentId][j][0], this.stats.collisionHistory[agentId][j][1]];
            item1[j - lowerBound] = [this.stats.collisionHistory[agentId][j][0], this.stats.collisionHistory[agentId][j][2]];
            wall[j - lowerBound] = [this.stats.collisionHistory[agentId][j][0], this.stats.collisionHistory[agentId][j][3]];
            agent[j - lowerBound] = [this.stats.collisionHistory[agentId][j][0], this.stats.collisionHistory[agentId][j][4]];
        }
        return [item0, item1, wall, agent];
    }
    ensureXAxisInterval() {
        const length = this.stats.collisionHistory[0].length;
        if (length > this.xaxisLength) {
            const xMin = this.stats.collisionHistory[0][length - this.xaxisLength - 1][0];
            const xMax = this.stats.collisionHistory[0][length - 1][0];
            this.opt = this.getOptsFor(xMin, xMax);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Flot;



/***/ }),

/***/ "./src/app/viewcontrol/utils/specs.utility.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Specs {
    constructor(id, agent) {
        this.id = id;
        this.alpha = agent.getOpt().get('alpha');
        this.epsilon = agent.getOpt().get('epsilon');
        this.gamma = agent.getOpt().get('gamma');
        this.experienceSize = agent.getOpt().get('experienceSize');
        this.experienceAddEvery = agent.getOpt().get('experienceAddEvery');
        this.learningStepsPerIteration = agent.getOpt().get('learningStepsPerIteration');
        this.tdErrorClamp = agent.getOpt().get('tdErrorClamp');
        this.numHiddenUnits = agent.getOpt().get('numHiddenUnits');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Specs;



/***/ }),

/***/ "./src/app/viewcontrol/viewcontrol.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_learning_agents_model__ = __webpack_require__("./node_modules/learning-agents-model/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_learning_agents_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_learning_agents_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_specs_utility__ = __webpack_require__("./src/app/viewcontrol/utils/specs.utility.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_collision_stats_utility__ = __webpack_require__("./src/app/viewcontrol/utils/collision-stats.utility.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_canvas_utility__ = __webpack_require__("./src/app/viewcontrol/utils/canvas.utility.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_flot_charts__ = __webpack_require__("./src/app/viewcontrol/utils/flot.charts.ts");





class ViewControl {
    constructor() {
        this.width = 600;
        this.height = 600;
        this.maxAgents = 2;
        this.maxItems = 50;
        // Simulation and Controls
        this.simSpeedIndex = 1;
        this.simBoostIntervals = [1, 1, 3, 3];
        this.simSpeedIntervals = [150, 41, 41, 41];
    }
    ngOnInit() {
        this.init();
        this.initConcrete();
        this.start();
    }
    init() {
        this.world = new __WEBPACK_IMPORTED_MODULE_0_learning_agents_model__["World"](this.width, this.height, this.maxAgents, this.maxItems);
        this.world.setBoundaryCondition('stable');
        this.specs = new Array();
        for (const [i, agent] of this.world.agents.entries()) {
            this.specs.push(new __WEBPACK_IMPORTED_MODULE_1__utils_specs_utility__["a" /* Specs */](i + 1, agent));
        }
        this.collisionStats = new __WEBPACK_IMPORTED_MODULE_2__utils_collision_stats_utility__["a" /* CollisionStats */](this.world.getAgents(), this.world.getItems());
        this.canvas = new __WEBPACK_IMPORTED_MODULE_3__utils_canvas_utility__["a" /* CanvasUtility */]('simulation', document, this.width, this.height);
        this.chart = new __WEBPACK_IMPORTED_MODULE_4__utils_flot_charts__["a" /* Flot */]('reward-chart', document, $, this.collisionStats);
        this.isPaused = false;
        this.isPausedDrawing = false;
        this.isPausedPlotting = false;
    }
    start() {
        console.log('[' + new Date().toISOString() + ']: Training of Agent is starting!'
            + '\nStarting training phase!'
            + '\nCurrent Timestamp: ' + new Date().getTime());
        this.isPaused = false;
        this.setSimulationInterval(this.simSpeedIndex);
        this.setEvaluationInterval();
    }
    pause() {
        this.isPaused = true;
        this.setSimulationInterval(this.simSpeedIndex);
        this.setEvaluationInterval();
    }
    pauseDrawing() {
        this.isPausedDrawing = !this.isPausedDrawing;
    }
    pausePlotting() {
        this.isPausedPlotting = !this.isPausedPlotting;
        this.setEvaluationInterval();
    }
    reset() {
        this.world.reset();
        this.collisionStats.reset(this.world.getAgents(), this.world.getItems());
        this.chart.reset();
        this.start();
    }
    goMax() {
        this.setSimulationInterval(3);
    }
    goFast() {
        this.setSimulationInterval(2);
    }
    goNormal() {
        this.setSimulationInterval(1);
    }
    goSlow() {
        this.setSimulationInterval(0);
    }
    tick() {
        for (let i = 0; i < this.iterationsPerTick; i++) {
            this.handleEvaluationPeriodActivation();
            this.tickSimulationLogic();
        }
    }
    tickSimulationLogic() {
        this.world.tick();
        this.collisionStats.tick(this.world.clock(), this.world.getAgents(), this.world.getItems(), this.ticksPerSecond);
        if (this.shouldUpdateCanvas()) {
            this.draw();
        }
    }
    draw() {
        this.canvas.draw(this.world);
    }
    setSimulationInterval(simSpeed = 1) {
        window.clearInterval(this.simIntervalId);
        this.setSimulationParameters(simSpeed);
        if (!this.isPaused) {
            const self = this;
            const func = function () {
                self.tick();
            };
            this.simIntervalId = setInterval(func, this.simSpeedIntervals[simSpeed]);
        }
    }
    setSimulationParameters(simSpeed) {
        this.simSpeedIndex = simSpeed;
        this.iterationsPerTick = Math.pow(this.simBoostIntervals[simSpeed], this.simSpeedIndex); // boost by the power of simSpeedIndex
        this.ticksPerSecond = Math.floor(1000 / this.simSpeedIntervals[this.simSpeedIndex] * this.iterationsPerTick);
    }
    setEvaluationInterval(milliseconds = 1000) {
        window.clearInterval(this.simEvaluationIntervalId);
        if (!this.isPausedPlotting) {
            const self = this;
            const func = function () {
                self.updateChart();
            };
            this.simEvaluationIntervalId = setInterval(func, milliseconds);
        }
    }
    /**
     * Draw at speeds:
     * - below FAST -> regularly
     * - at FAST -> every 5th step
     * - at MAX -> every 2nd step
     */
    shouldUpdateCanvas() {
        return !this.isPausedDrawing;
    }
    /**
     * This Method has its own Update Interval independent of the simulation.
     */
    updateChart() {
        this.chart.plot(this.world.getAgents().length);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewControl;



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const environment = {
    production: true
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map