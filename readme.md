# Advanced Angular 6th-8th February 2023

https://github.com/doingandlearning/advAngularFeb2023
(https://bit.ly/glencore-angular)


## Kevin Cunningham - Framework Training

- 9:30 start
- 11:00 coffee break
- 1 lunch break
- 3:00 tea break
- 4:30 end
https://bit.ly/glencore-angular
## Monday
> intro
> writing code together
> best practices and performance
> interpolation {{}}
> generating stuff
> pipes
> components, modules etc
> bindings
> architectural
> complete the routing
> compare ways to pass data around in an app
> input/output/event
> content projection
> Review Exercise
> how to migrate from older angular
> dev tools
> *ngIf or [disabled]= also consider [hidden]=

Questions:
- Queues -> how to interact/subscribe/push ... 
- Websocket - SignalR-JS/SocketIO

## Tuesday
> brief review
> Services
> HttpClient Module (replaces earlier Http Module)
> Review Exercise
- Forms
- async pipe
- subscription: every subscription is destroyed when component is destroyed
- manually unsubscribe too
- life-cycle events
> change detection
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
- Control Value Accessor => Star Rating
- ngrx => simple cart store
- router => looking at guards
- Login services
	- Persist to localStorage (ngrx meta resolver or seperate service)
	- Call and response -> OAuth2 flow -> intermediary server
	- Social login (https://abacritt.github.io/angularx-social-login/)
- single source of truth for complex forms? 
---
- Ivy: much better tree-shaking, new DI, faster/smaller code modules, no need for app.module etc.
- Libraries
- Testing unit/functional/e2e
- obfuscated (obfuscation)
- closure
- Review Exercise
- publish - production - look at the generated code esp js, also aot and jit
- locale (if time)
- end of course feedback: https://frameworktraining.typeform.com/to/pWO8UiNz