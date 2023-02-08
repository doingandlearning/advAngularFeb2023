# Advanced Angular 6th-8th February 2023

https://github.com/doingandlearning/advAngularFeb2023
(https://bit.ly/glencore-angular)


## Kevin Cunningham - Framework Training

- 9:30 start
- 11:00 coffee break
- 1 lunch break
- 3:00 tea break
- 4:30 end

## Monday
- [x] intro
- [x] writing code together
- [x] best practices and performance
- [x] interpolation {{}}
- [x] generating stuff
- [x] pipes
- [x] components, modules etc
- [x] bindings
- [x] architectural
- [x] complete the routing
- [x] compare ways to pass data around in an app
- [x] input/output/event
- [x] content projection
- [x] Review Exercise
- [x] how to migrate from older angular
- [x] dev tools
- [x] *ngIf or [disabled]= also consider [hidden]=

Questions:
- Queues -> how to interact/subscribe/push ... 
- Websocket - SignalR-JS/SocketIO

## Tuesday
- [x] brief review
- [x] Services
- [x] HttpClient Module (replaces earlier Http Module)
- [x] Review Exercise
- [x] Forms
- async pipe
- subscription: every subscription is destroyed when component is destroyed
- manually unsubscribe too
- [x] life-cycle events
- [x] change detection
- rxjs, combining data

 questions
- control value accessor
- router and guarded routes
- jwt/token service -> outh2
- store -> story when to use stores
- 200 properties ... dynamically generate based on the ... simplify reactive forms
- ngrx/redux example

## Wednesday
---
- [x] Control Value Accessor => Star Rating
- [x] ngrx => simple cart store (actions, reducers, selectors)
- [x] router => looking at guards (CanActivate, CanActivateChild, CanDeactivate)
- [x] Login services
	- Persist to localStorage (ngrx meta resolver or seperate service)
	- Call and response -- [x] OAuth2 flow -- [x] intermediary server
	- Social login (https://abacritt.github.io/angularx-social-login/)
- [x] single source of truth for complex forms? 
---
- [x] Ivy: much better tree-shaking, new DI, faster/smaller code modules, no need for app.module etc.
- [ ] Libraries
- [ ] Testing unit/functional/e2e
- [ ] obfuscated (obfuscation)
- [ ] closure
- [ ] Review Exercise
- [ ] publish - production - look at the generated code esp js, also aot and jit
- [ ] locale (if time)
- [ ] end of course feedback: https://frameworktraining.typeform.com/to/pWO8UiNz



## Left over questions

Can ngIf/else use anything other than template? 
	Nope.

What is the ngrx UPDATE enum?
  Can't find it documented anywhere!

What happens for clash in key of stores?
  

Identity server Angular example
  - https://github.com/manfredsteyer/angular-oauth2-oidc - this is a library that interacts with an OIDC compliant identity server.
  - 
  
